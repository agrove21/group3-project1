const catBaseUrl = "https://api.thecatapi.com/v1";
const dogBaseUrl = "https://api.thedogapi.com/v1"
const catApiKey =
  "live_XIJ61rTGzrcgWLwQRMEqokr5qx6iJrORl2zr9k4374qNbDbba5pF1f37eXHGQQ1h";
const dogApiKey =
  "live_UOjfU5yMJMSn0iNtFAJfiutWXY0Py1pJqDJt6oEWwwtMUplQstSsRv3KcHWQ5k9E";

document
  .getElementById("select-pet")
  .addEventListener("change", function (event) {
    console.log(event.target.value);
    if (event.target.value === "cat") {
      fetchCatBreeds();
    } else if (event.target.value === "dog") {
      fetchDogBreeds();
    }
  });

