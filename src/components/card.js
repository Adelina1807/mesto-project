//Добавляем карточку
import {
  cardSection,
  cardTemplate,
  cardOpenedImage,
  cardOpenedText,
  cardOpened,
  addPopup,
  linkInput,
  imageNameInput,
  saveCard,
} from "../index.js";

import { openPopup, closePopup } from "./utils.js";
import { appendCard, getRes, deleteCard, putLike, deleteLike } from "./api.js";

export function addCard(card) {
  cardSection.prepend(card);
}

export function createCard(link, name, likes, owner, id) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardLikeNumber = card.querySelector(".card__like-number");

  card.querySelector(".card__image").src = link;
  card.querySelector(".card__image").alt = name;
  card.querySelector(".card__name").textContent = name;
  cardLikeNumber.textContent = likes.length;

  card.querySelector(".card__heart").addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__heart_active");
    if (evt.target.classList.contains("card__heart_active")) {
      putLike(id)
        .then(getRes)
        .then((res) => {
          cardLikeNumber.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      deleteLike(id)
        .then(getRes)
        .then((res) => {
          cardLikeNumber.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  if (
    likes.some(function (id) {
      return id._id === "1530cef55a8d58a5ead46352";
    })
  ) {
    if (
      !card
        .querySelector(".card__heart")
        .classList.contains("card__heart_active")
    ) {
      card.querySelector(".card__heart").classList.add("card__heart_active");
    }
  }

  if (owner === "1530cef55a8d58a5ead46352") {
    card
      .querySelector(".card__delete")
      .addEventListener("click", function (evt) {
        evt.target.closest(".card").remove();
        deleteCard(id)
          .then(getRes)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  } else {
    card.querySelector(".card__delete").remove();
  }

  card.querySelector(".card__image").addEventListener("click", function () {
    cardOpenedImage.src = link;
    cardOpenedImage.alt = name;
    cardOpenedText.textContent = name;
    openPopup(cardOpened);
  });
  return card;
}

export function handleAddCardFormSubmit(evt) {
  saveCard.textContent = "Создание...";
  evt.preventDefault();

  appendCard(imageNameInput.value, linkInput.value)
    .then(getRes)
    .then((res) => {
      saveCard.textContent = "Создать";
      addCard(
        createCard(res.link, res.name, res.likes, res.owner._id, res._id)
      );
    })
    .catch((err) => {
      console.log(err);
    });

  closePopup(addPopup);
}
