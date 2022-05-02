const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cards = [];
const cardsOpenedTemplate = document.querySelector('.card-opened__template').content;
const cardTemplate = document.querySelector('.card__template').content;
const cardSection = document.querySelector('.photos');
const content = document.querySelector('.content');

//Добавялем на страницу 6 карточек
initialCards.forEach(function(item, i) {
  cards.push({cardClosed: cardTemplate.querySelector('.card').cloneNode(true), cardOpened: cardsOpenedTemplate.querySelector('.popup_type_photo').cloneNode(true)});
  cards[i];

  cards[i].cardClosed.querySelector('.card__image').src = initialCards[i].link;
  cards[i].cardClosed.querySelector('.card__image').alt = initialCards[i].name;
  cards[i].cardClosed.querySelector('.card__name').textContent = initialCards[i].name;

  cards[i].cardOpened.querySelector('.card-opened__image').src = initialCards[i].link;
  cards[i].cardOpened.querySelector('.card-opened__image').alt = initialCards[i].name;
  cards[i].cardOpened.querySelector('.card-opened__text').textContent = initialCards[i].name;

  cards[i].cardClosed.querySelector('.card__image').addEventListener('click', function() {
    cards[i].cardOpened.classList.add('popup_opened');
  });

  cards[i].cardOpened.querySelector('.window__close-button_type_photo').addEventListener('click', function(evt) {
    evt.target.closest('.popup_type_photo').classList.remove('popup_opened');
  });

  cards[i].cardClosed.querySelector('.card__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  cards[i].cardClosed.querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  cardSection.append(cards[i].cardClosed);
  content.append(cards[i].cardOpened);
});

//Открытие и закрытие формы для изменения профиля
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const closeEditButton = document.querySelector('.window__close-button_type_edit');

editButton.addEventListener('click', function() {
  editPopup.classList.add('popup_opened');
});

function closePopupEdit() {
  editPopup.classList.remove('popup_opened');
};

closeEditButton.addEventListener('click', closePopupEdit);

//Открытие и закрытие формы для добавление карточки
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_add');
const closeAddButton = document.querySelector('.window__close-button_type_add');

addButton.addEventListener('click', function() {
  addPopup.classList.add('popup_opened');
});

function closePopupAdd() {
  addPopup.classList.remove('popup_opened');
};

closeAddButton.addEventListener('click', closePopupAdd);

//Изменения в форме
const formElement = document.querySelectorAll('.window__form');
const nameInput = document.querySelectorAll('.window__input_type_name');
const jobInput = document.querySelectorAll('.window__input_type_info');

//Меняем профиль
function formSubmitEdit (evt) {
  evt.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__text');

  profileName.textContent = nameInput[0].value;
  profileJob.textContent = jobInput[0].value;

  closePopupEdit();
}

formElement[0].addEventListener('submit', formSubmitEdit);

//Добавляем карточку
function formSubmitAdd (evt) {
  evt.preventDefault();

  cards.unshift({cardClosed: cardTemplate.querySelector('.card').cloneNode(true), cardOpened: cardsOpenedTemplate.querySelector('.popup_type_photo').cloneNode(true)});

  cards[0].cardClosed.querySelector('.card__image').src = jobInput[1].value;
  cards[0].cardClosed.querySelector('.card__image').alt = nameInput[1].value;
  cards[0].cardClosed.querySelector('.card__name').textContent = nameInput[1].value;

  cards[0].cardOpened.querySelector('.card-opened__image').src = jobInput[1].value;
  cards[0].cardOpened.querySelector('.card-opened__image').alt = nameInput[1].value;
  cards[0].cardOpened.querySelector('.card-opened__text').textContent = nameInput[1].value;

  cards[0].cardClosed.querySelector('.card__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  cards[0].cardClosed.querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  cards[0].cardClosed.querySelector('.card__image').addEventListener('click', function() {
    cards[0].cardOpened.classList.add('popup_opened');
  });

  cards[0].cardOpened.querySelector('.window__close-button_type_photo').addEventListener('click', function(evt) {
    evt.target.closest('.popup_type_photo').classList.remove('popup_opened');
  });

  cardSection.prepend(cards[0].cardClosed);
  content.append(cards[0].cardOpened);

  closePopupAdd();
};

formElement[1].addEventListener('submit', formSubmitAdd);
