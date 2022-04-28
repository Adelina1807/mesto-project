const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup');
const closeButton = document.querySelector('.window__close-button');

editButton.addEventListener('click', function() {
  editPopup.classList.add('popup_opened');
});

function closePopup() {
  editPopup.classList.remove('popup_opened');
};

closeButton.addEventListener('click', closePopup);

const formElement = document.querySelector('.window__form');
const nameInput = document.querySelector('.window__input_type_name');
const jobInput = document.querySelector('.window__input_type_info');

function formSubmitHandler (evt) {
  evt.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__text');

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
