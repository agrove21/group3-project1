const catBaseUrl = "https://api.thecatapi.com/v1";
const catApiKey =
  "live_XIJ61rTGzrcgWLwQRMEqokr5qx6iJrORl2zr9k4374qNbDbba5pF1f37eXHGQQ1h";
    
  function fetchCatBreeds() {
  fetch(`${catBaseUrl}/breeds`)
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
    fetch(`${catBaseUrl}/breeds/${id}`)
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

  window.onload = fetchCatBreeds;