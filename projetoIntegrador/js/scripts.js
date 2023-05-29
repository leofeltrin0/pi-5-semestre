//Bootstrap core JS
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"

src="https://cdn.startbootstrap.com/sb-forms-latest.js"

//Script init-hidden
  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);

      Array.from(entries).forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
          entry.target.classList.add("init-hidden-off");
        }
      });
    },
    {
      threshold: [0, 0.5, 1],
    }
  );

  Array.from(document.querySelectorAll(".init-hidden")).forEach(
    (element) => {
      observer.observe(element);
    }
  );

//Script Navbar
      const navBar = document.querySelector(".navbar");
      const navBarHeight = navBar.offsetHeight;

      window.addEventListener("scroll", () => {
        if (window.scrollY > navBarHeight) {
          navBar.classList.add("navbar-scrolled");
        } else {
          navBar.classList.remove("navbar-scrolled");
        }
      });


//Script Zoom
      var zoomableImages = document.querySelectorAll(
        ".zoomable, .showcase-scroll"
      );

      zoomableImages.forEach(function (image) {
        image.addEventListener("mouseenter", function () {
          this.classList.add("zoom-in");
        });
        image.addEventListener("mouseleave", function () {
          this.classList.remove("zoom-in");
        });
      });

//Script Options Search
var searchInput = document.getElementById("searchBar");
var suggestionsContainer = document.getElementById("suggestionsContainer");
var submitButton = document.getElementById("search-button");
var apiUrl = "https://exemplo.com/api/produtos"; // URL da API

// Exibe as sugestões de pesquisa com animação
function showSearchSuggestions() {
  var value = searchInput.value.toLowerCase();
  var suggestions = ["Iphone XS", "Iphone XR", "Iphone 13 Pro Max"]; // Sugestões de exemplo

  // Limpa as sugestões anteriores
  suggestionsContainer.innerHTML = "";

  // Exibe ou oculta o contêiner de sugestões com base no valor do campo de pesquisa
  if (value.trim().length > 0) {
    suggestionsContainer.style.maxHeight = "200px"; // Define a altura máxima para exibir as sugestões

    // Filtra as sugestões com base no valor digitado
    var filteredSuggestions = suggestions.filter(function (suggestion) {
      return suggestion.toLowerCase().indexOf(value) !== -1;
    });

    // Exibe as sugestões filtradas
    filteredSuggestions.forEach(function (suggestion) {
      var suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.textContent = suggestion;
      suggestionItem.addEventListener("click", function () {
        // Preenche o valor da sugestão selecionada no campo de pesquisa
        searchInput.value = suggestion;
        // Limpa as sugestões
        suggestionsContainer.innerHTML = "";
        // Habilita o botão de submit
        submitButton.disabled = false;
      });
      suggestionsContainer.appendChild(suggestionItem);
    });
  } else {
    suggestionsContainer.style.maxHeight = "0"; // Define a altura máxima como 0 para ocultar as sugestões
    // Desabilita o botão de submit quando não há sugestões
    submitButton.disabled = true;
  }

  // Desabilita o botão de submit quando o valor do campo de pesquisa não corresponde a nenhuma sugestão
  if (filteredSuggestions.length === 0 && value.trim().length > 0) {
    submitButton.disabled = true;
  }
}

// Fecha as sugestões quando clicar fora do campo de pesquisa
window.addEventListener("click", function (event) {
  if (!searchInput.contains(event.target)) {
    suggestionsContainer.style.maxHeight = "0"; // Define a altura máxima como 0 para ocultar as sugestões
  }
});

// Evento de clique do botão de envio
submitButton.addEventListener("click", async function() {
  var searchValue = searchInput.value.trim();

  // Cria um objeto FormData para enviar os dados da pesquisa à API
  var formData = new FormData();
  formData.append("searchTerm", searchValue);

  // Configurações da requisição
  var requestOptions = {
    method: "POST", // ou "POST" dependendo da sua API
    body: formData,
	header: {
		"Content-Type":"application/json"
	}
  };
  
  let returnUrl = "paginaProdutos.html"
	console.log('URLLLL', returnUrl)
  // Envia a requisição à API
  
  /*
   const response = await fetch(apiUrl, requestOptions);
   
   const payload = await repsons.json();
   
   if(response.ok) window.location.href = returnUrl;
   else console.log('erro de fetch')
   
  */
  try {
	  
   const response = await fetch(apiUrl, requestOptions);
   
   const payload = await repsons.json();
   
   if(response.ok) window.location.href = returnUrl
  } catch(err) {  
	window.location.href = returnUrl
  }
});