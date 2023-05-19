from senha import API_KEY
import requests
import json


headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type":"application/json"}
link = "https://api.openai.com/v1/chat/completions"
id_modelo = "gpt-3.5-turbo-0301"

comentario = input("Comentário: ")
msg_user = f"Comentário: {comentario} Características: [Lista das características mencionadas no comentário] Polaridade: [Polaridade do sentimento expresso no comentário] retorne apenas as caracteristicas e a polaridade"


body_msg = {
  "model": id_modelo,
  "messages": [{"role": "user", "content": msg_user}]
}
body_msg = json.dumps(body_msg)

request = requests.post(link, headers=headers, data = body_msg)

resposta = request.json()
usage = resposta["usage"]
mensagem = resposta["choices"][0]["message"]["content"]

print(usage)
print(mensagem)
