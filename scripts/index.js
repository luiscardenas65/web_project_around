let page = document.querySelector('.page');
let popup = document.querySelector(".popup")
let butnOpen = document.querySelector("#profile__rectangle");
let butnClose = document.querySelector("#profile__button_vector");
let form = document.querySelector("#container");
let btnSave = document.querySelector("#button_save");
let nameInp = document.querySelector("#nameinpt");
let profInp = document.querySelector("#professioninpt");
let nameResult = document.querySelector("#name");
let profResult = document.querySelector("#profession");

function openpopup() {
  popup.classList.add("popup__opened");
}

function closepoup() {
  popup.classList.remove("popup__opened");
}

butnOpen.addEventListener("click", openpopup);
butnClose.addEventListener("click", closepoup);


form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  nameResult.textContent = nameInp.value;
  profResult.textContent = profInp.value;
  closepoup();
});


