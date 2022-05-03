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
const cardTemplate = document.querySelector('.card__template').content;
const cardSection = document.querySelector('.photos');
const cardOpened = document.querySelector('.popup_type_photo');
const cardOpenedImage = cardOpened.querySelector('.card-opened__image');
const cardOpenedText = cardOpened.querySelector('.card-opened__text');
const cardOpenedClose = cardOpened.querySelector('.window__close-button_type_photo');

cardOpenedClose.addEventListener('click', function() {
  cardOpened.classList.remove('popup_opened');
});

//Добавялем на страницу 6 карточек
initialCards.forEach(function(item, i) {
  cards.push(cardTemplate.querySelector('.card').cloneNode(true));
  cards[i];

  cards[i].querySelector('.card__image').src = initialCards[i].link;
  cards[i].querySelector('.card__image').alt = initialCards[i].name;
  cards[i].querySelector('.card__name').textContent = initialCards[i].name;

  cards[i].querySelector('.card__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  cards[i].querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  cards[i].querySelector('.card__image').addEventListener('click', function() {
    cardOpenedImage.src = initialCards[i].link;
    cardOpenedImage.name = initialCards[i].name;
    cardOpenedText.textContent = initialCards[i].name;
    cardOpened.classList.add('popup_opened');
  })

  cardSection.append(cards[i]);
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

  cards.unshift(cardTemplate.querySelector('.card').cloneNode(true));

  cards[0].querySelector('.card__image').src = jobInput[1].value;
  cards[0].querySelector('.card__image').alt = nameInput[1].value;
  cards[0].querySelector('.card__name').textContent = nameInput[1].value;

  cards[0].querySelector('.card__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  cards[0].querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  cards[0].querySelector('.card__image').addEventListener('click', function() {
    cardOpenedImage.src = jobInput[1].value;
    cardOpenedImage.name = nameInput[1].value;
    cardOpenedText.textContent = nameInput[1].value;
    cardOpened.classList.add('popup_opened');
  })

  cardSection.prepend(cards[0]);

  closePopupAdd();
};

formElement[1].addEventListener('submit', formSubmitAdd);


