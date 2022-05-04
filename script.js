const cardTemplate = document.querySelector('.card__template').content;
const cardSection = document.querySelector('.photos');

const cardOpened = document.querySelector('.popup_type_photo');
const cardOpenedImage = cardOpened.querySelector('.card-opened__image');
const cardOpenedText = cardOpened.querySelector('.card-opened__text');
const cardOpenedClose = cardOpened.querySelector('.window__close-button_type_photo');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function createCard(link, name) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = name;
  card.querySelector('.card__name').textContent = name;

  card.querySelector('.card__heart').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__heart_active');
  });

  card.querySelector('.card__delete').addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  card.querySelector('.card__image').addEventListener('click', function() {
    cardOpenedImage.src = link;
    cardOpenedImage.alt = name;
    cardOpenedText.textContent = name;
    openPopup(cardOpened);
  });
  return card;
};

function addCard(card) {
  cardSection.prepend(card);
};

//Добавялем на страницу 6 карточек
initialCards.forEach(function(item) {
  addCard(createCard(item.link, item.name));
});

//Открытие и закрытие формы для изменения профиля
const formElementProfile = document.querySelector('.window__form_type_profile');
const nameInput = formElementProfile.querySelector('.window__input_type_name');
const jobInput = formElementProfile.querySelector('.window__input_type_info');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__text');

const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const closeEditButton = document.querySelector('.window__close-button_type_edit');

editButton.addEventListener('click', function() {
  openPopup(editPopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closeEditButton.addEventListener('click', function() {
  closePopup(editPopup);
});

//Открытие и закрытие формы для добавление карточки
const formElementAddCard = document.querySelector('.window__form_type_add');
const imageNameInput = formElementAddCard.querySelector('.window__input_type_name');
const linkInput = formElementAddCard.querySelector('.window__input_type_info');

const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup_type_add');
const closeAddButton = document.querySelector('.window__close-button_type_add');

addButton.addEventListener('click', function() {
  openPopup(addPopup);
  formElementAddCard.reset();
});

closeAddButton.addEventListener('click', function() {
  closePopup(addPopup);
});

//Меняем профиль
function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(editPopup);
}

formElementProfile.addEventListener('submit', handleProfileFormSubmit);

//Добавляем карточку
function handleAddCardFormSubmit (evt) {
  evt.preventDefault();

  addCard(createCard(linkInput.value, imageNameInput.value));

  closePopup(addPopup);
};

formElementAddCard.addEventListener('submit', handleAddCardFormSubmit);

cardOpenedClose.addEventListener('click', function() {
  closePopup(cardOpened);
});
