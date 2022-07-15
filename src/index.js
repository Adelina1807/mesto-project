import "./styles/index.css";

import {
  handleProfileFormSubmit,
  handleProfilePhotoFormSubmit,
} from "./components/modal.js";
import { enableValidation, toggleButtonState } from "./components/validate.js";
import {
  handleAddCardFormSubmit,
  addCard,
  createCard,
} from "./components/card.js";
import { openPopup, closePopup } from "./components/utils.js";
import { getProfileInfo, getRes, getCards } from "./components/api";

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
export const saveProfile = formElementProfile.querySelector(
  ".window__save-button"
);

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__text");
export const profileImage = document.querySelector(".profile__image");

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
export const saveCard = formElementAddCard.querySelector(
  ".window__save-button"
);

const addButton = document.querySelector(".profile__add-button");
export const addPopup = document.querySelector(".popup_type_add");
const closeAddButton = document.querySelector(".window__close-button_type_add");

const photoEdit = document.querySelector(".profile__image_state_hover");
export const photoEditPopup = document.querySelector(
  ".popup_type_profile-photo"
);
const photoEditCloseButton = document.querySelector(
  ".window__close-button_type_profile-photo"
);

const photoEditForm = document.querySelector(
  ".window__form_type_profile-photo"
);
export const photoInput = photoEditForm.querySelector(
  ".window__input_type_info"
);
export const savePhoto = photoEditForm.querySelector(".window__save-button");
//Загружаем информацию о пользователе
getProfileInfo()
  .then(getRes)
  .then((result) => {
    profileName.textContent = result.name;
    profileJob.textContent = result.about;
    profileImage.src = result.avatar;
    profileImage.alt = result.name;
  })
  .catch((err) => {
    console.log(err);
  });

//Загружаем карточки с сервера
getCards()
  .then(getRes)
  .then((result) => {
    result.reverse().forEach(function (item) {
      addCard(
        createCard(item.link, item.name, item.likes, item.owner._id, item._id)
      );
    });
  })
  .catch((err) => {
    console.log(err);
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

photoEditForm.addEventListener("submit", handleProfilePhotoFormSubmit);

//Открытие формы для изменения фотографии профиля
photoEdit.addEventListener("click", function () {
  openPopup(photoEditPopup);
  photoEditForm.reset();

  const inputListphotoEditPopup = Array.from(
    photoEditPopup.querySelectorAll(".window__input")
  );
  const buttonphotoEditPopup = photoEditPopup.querySelector(
    ".window__save-button"
  );

  toggleButtonState(inputListphotoEditPopup, buttonphotoEditPopup, {
    formSelector: ".window__form",
    inputSelector: ".window__input",
    submitButtonSelector: ".window__save-button",
    inactiveButtonClass: "window__save-button_inactive",
    inputErrorClass: "window__input_type_error",
    errorClass: "window__input-error_active",
  });
});

//Закрытие формы для изменения фотографии профиля(кнопка крестик)
photoEditCloseButton.addEventListener("click", function () {
  closePopup(photoEditPopup);
});

//Закрытие формы для изменения фотографии профиля(клик вне области)
photoEditPopup.addEventListener("mousedown", function (evt) {
  const target = evt.target;
  if (!target.closest(".window") && !target.closest(".window__form")) {
    closePopup(photoEditPopup);
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
