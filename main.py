from senha import API_KEY
import requests
import json

msg_user = "Gostaria que você fizesse a análise do comentário sobre um produto a seguir e me retorne as principais características destacadas pelo usuário, caso não haja características relevantes, não retorne nada. Além disso, gostaria que você também me retornasse a polaridade do sentimento do comentário. Quero que me responda apenas as características que pedi e a polaridade em um formato: 'Caracteristicas:\n'Polaridade:'\nComentario:"

headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type":"application/json"}
link = "https://api.openai.com/v1/chat/completions"
id_modelo = "gpt-3.5-turbo-0301"

comentario = input("Comentário: ")

body_msg = {
  "model": id_modelo,
  "messages": [{"role": "user", "content": msg_user + comentario}]
}
body_msg = json.dumps(body_msg)

request = requests.post(link, headers=headers, data = body_msg)

resposta = request.json()
usage = resposta["usage"]
mensagem = resposta["choices"][0]["message"]["content"]

print(usage)
print(mensagem)