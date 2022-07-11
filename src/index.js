import "./styles/index.css";

import { handleProfileFormSubmit } from "./components/modal.js";
import { enableValidation, toggleButtonState } from "./components/validate.js";
import {
  handleAddCardFormSubmit,
  addCard,
  createCard,
} from "./components/card.js";
import { openPopup, closePopup } from "./components/utils.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const cardTemplate = document.querySelector(".card__template").content;
export const cardSection = document.querySelector(".photos");

export const cardOpened = document.querySelector(".popup_type_photo");
export const cardOpenedImage = cardOpened.querySelector(".card-opened__image");
export const cardOpenedText = cardOpened.querySelector(".card-opened__text");
const cardOpenedClose = cardOpened.querySelector(
  ".window__close-button_type_photo"
);

const formElementProfile = document.querySelector(".window__form_type_profile");
export const nameInput = formElementProfile.querySelector(
  ".window__input_type_name"
);
export const jobInput = formElementProfile.querySelector(
  ".window__input_type_info"
);

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__text");

const editButton = document.querySelector(".profile__edit-button");
export const editPopup = document.querySelector(".popup_type_edit");
const closeEditButton = document.querySelector(
  ".window__close-button_type_edit"
);

const formElementAddCard = document.querySelector(".window__form_type_add");
export const imageNameInput = formElementAddCard.querySelector(
  ".window__input_type_name"
);
export const linkInput = formElementAddCard.querySelector(
  ".window__input_type_info"
);

const addButton = document.querySelector(".profile__add-button");
export const addPopup = document.querySelector(".popup_type_add");
const closeAddButton = document.querySelector(".window__close-button_type_add");

//Добавялем на страницу 6 карточек
initialCards.forEach(function (item) {
  addCard(createCard(item.link, item.name));
});

//Открытие формы для изменения профиля
editButton.addEventListener("click", function () {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//Закрытие формы для изменения профиля(кнопка крестик)
closeEditButton.addEventListener("click", function () {
  closePopup(editPopup);
});

//Закрытие формы для изменения профиля(клик вне области)
editPopup.addEventListener("mousedown", function (evt) {
  const target = evt.target;
  if (!target.closest(".window") && !target.closest(".window__form")) {
    closePopup(editPopup);
  }
});

//Меняем профиль
formElementProfile.addEventListener("submit", handleProfileFormSubmit);

//Открытие формы для добавления карточки
addButton.addEventListener("click", function () {
  openPopup(addPopup);
  formElementAddCard.reset();

  const inputListAddPopup = Array.from(
    addPopup.querySelectorAll(".window__input")
  );
  const buttonAddPopup = addPopup.querySelector(".window__save-button");

  toggleButtonState(inputListAddPopup, buttonAddPopup, {
    formSelector: ".window__form",
    inputSelector: ".window__input",
    submitButtonSelector: ".window__save-button",
    inactiveButtonClass: "window__save-button_inactive",
    inputErrorClass: "window__input_type_error",
    errorClass: "window__input-error_active",
  });
});

//Закрытие формы для добавления карточки(кнопка крестик)
closeAddButton.addEventListener("click", function () {
  closePopup(addPopup);
});

//Закрытие формы для добавления карточки(клик вне области)
addPopup.addEventListener("mousedown", function (evt) {
  const target = evt.target;
  if (!target.closest(".window") && !target.closest(".window__form")) {
    closePopup(addPopup);
  }
});

//Добавление карточки
formElementAddCard.addEventListener("submit", handleAddCardFormSubmit);

//Закрытие карточки(кнопка крестик)
cardOpenedClose.addEventListener("click", function () {
  closePopup(cardOpened);
});

//Закрытие карточки(клик вне области)
cardOpened.addEventListener("mousedown", function (evt) {
  const target = evt.target;
  if (!target.closest(".card-opened")) {
    closePopup(cardOpened);
  }
});

//Валидация форм
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: ".window__form",
  inputSelector: ".window__input",
  submitButtonSelector: ".window__save-button",
  inactiveButtonClass: "window__save-button_inactive",
  inputErrorClass: "window__input_type_error",
  errorClass: "window__input-error_active",
});
