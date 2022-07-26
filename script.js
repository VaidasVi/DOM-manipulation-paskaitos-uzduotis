document.querySelector("input").addEventListener("blur", addCity);

function addCity() {
  const inputElement = document.querySelector("input");

  const list = [];
  document.querySelectorAll("li").forEach((cities) => {
    list.push(cities.innerText.toLocaleLowerCase());
  });

  if (inputElement.value === "") {
    alert("Iveskite miesto pavadinima");
  } else if (list.includes(inputElement.value.toLocaleLowerCase())) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Toks miestas jau egzistuoja!";
    document.querySelector("main").append(errorMessage);
    inputElement.value = "";
  } else {
    const listItems = document.createElement("li");
    listItems.textContent = inputElement.value;
    document.querySelector("ul").append(listItems);
    inputElement.value = "";

    if (document.querySelector("p")) {
      document.querySelectorAll("p").forEach(() => {
        document.querySelector("p").remove();
      });
    }
  }
}
