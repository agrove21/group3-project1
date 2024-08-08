const dogBaseUrl = "https://api.thedogapi.com/v1";
const dogApiKey =
  "live_UOjfU5yMJMSn0iNtFAJfiutWXY0Py1pJqDJt6oEWwwtMUplQstSsRv3KcHWQ5k9E";

  function fetchDogBreeds() {
    fetch(`${dogBaseUrl}/breeds`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        showBreeds(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getBreedById(id) {
    fetch(`${dogBaseUrl}/breeds/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        showModalData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function showBreeds(breeds) {
    const breedsContainer = document.querySelector(".breeds-container");
    let buttonHTML = "";
    for (const breed of breeds) {
      buttonHTML += `<button id= ${breed.id} class= "button is-light">${breed.name}</button>`;
    }
    breedsContainer.innerHTML = buttonHTML;
  }

  window.onload = fetchDogBreeds;

