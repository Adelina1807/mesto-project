/**
 * Общая логика для всех модальных окон.
 */

// все модальные окна
const modals = document.querySelectorAll('.popup');

// все кнопки для закрытия модальных окон
const buttonsModalsClose = document.querySelectorAll('.window__close-button');

// закрытие всех модальных окон
function hideModals() {
  modals.forEach((modal) => {
    modal.classList.remove('popup_opened');
  });
};

// закрытие всех модальных окон по нажатию клавиши ESC
document.addEventListener('keyup', function(e) {
  if (e.key === "Escape") { // escape key maps to keycode `27`
    hideModals();
 }
});

// клик во все кнопки закрытия модальных окон
buttonsModalsClose.forEach(button => {button.addEventListener('click', hideModals)});


/**
 * Профиль
 */

//Открытие и закрытие формы для изменения профиля
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');

editButton.addEventListener('click', function() {
  editPopup.classList.add('popup_opened');
});

//Изменения в форме
const formElement = editPopup.querySelectorAll('.window__form');
const nameInput = document.querySelectorAll('.window__input_type_name');
const jobInput = document.querySelectorAll('.window__input_type_info');

//Меняем профиль
function formSubmitEdit (evt) {
  evt.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__text');

  profileName.textContent = nameInput[0].value;
  profileJob.textContent = jobInput[0].value;

  hideModals();
}

formElement[0].addEventListener('submit', formSubmitEdit);


/**
 * Карточки
 */

// блок cards, в нем живут карточки .card
const cards = document.querySelector('.photos');
// template карточки
const cardTemplate = document.querySelector('.card__template').content;
// Кнопка дял открытия модального окна добавления карточки
const buttonAddCard = document.querySelector('.profile__add-button');
// модальное окно добавления карточки
const modalAdd = document.querySelector('.popup_type_add');
// форма добавления карточки
const formAddCard = modalAdd.querySelector('.window__form');
// модальное окно с картинкой
const modalPhoto = document.querySelector('.popup_type_photo');
// тег img в модальном окне с картинкой
const modalPhotoImg = document.querySelector('.card-opened__image');
// подпись в модалке с картинкой
const modalName = document.querySelector('.card-opened__text');

// показ модального окна добавления карточки
function showModalAdd() {
  modalAdd.classList.add('popup_opened');
}

// показ модального окна с картинкой
function showModalPhoto(src, name) {
  modalPhotoImg.src = src;
  modalPhotoImg.alt = name;
  modalPhoto.classList.add('popup_opened');
  modalName.textContent = name;
}

// добавление новой карточки
function addCard({name, imageSrc}) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__name');

  cardImage.src = imageSrc;
  cardImage.alt = name;
  cardImage.dataset.name = name;
  cardName.textContent = name;

  cards.prepend(card);
}

// клик в кнопку "+"
buttonAddCard.addEventListener('click', showModalAdd);

// клик в кнопку "создать"
formAddCard.addEventListener('submit', (e) => {
  e.preventDefault();
  addCard(Object.fromEntries(new FormData(formAddCard)))
  hideModals();
});
document.addEventListener('click', function(event){
  // клик в картинку в карточке
  if(event.target.classList.contains('card__image')) {
    showModalPhoto(event.target.src, event.target.dataset.name);
  }
  // клик в "корзину" в карточке
  if(event.target.classList.contains('card__delete')) {
    event.target.closest('.card').remove();
  }
});

// добавленик карточек при закгрузке страницы
const initialCards = [
  {
    name: 'Архыз',
    // картинка для карточек
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    imageSrc: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];
initialCards.forEach(addCard);
