//Меняем профиль
import {
  profileName,
  profileJob,
  nameInput,
  jobInput,
  editPopup,
  photoInput,
  profileImage,
  photoEditPopup,
  saveProfile,
  savePhoto,
} from "../index.js";
import { closePopup } from "./utils.js";
import { updateProfileInfo, getRes, updateProfilePhoto } from "./api.js";

export function handleProfileFormSubmit(evt) {
  saveProfile.textContent = "Сохранение...";
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  updateProfileInfo(nameInput.value, jobInput.value)
    .then(getRes)
    .then((res) => {
      saveProfile.textContent = "Сохранить";
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  closePopup(editPopup);
}

export function handleProfilePhotoFormSubmit(evt) {
  savePhoto.textContent = "Сохранение...";
  evt.preventDefault();

  profileImage.src = photoInput.value;
  profileImage.alt = profileName;

  updateProfilePhoto(photoInput.value)
    .then(getRes)
    .then((res) => {
      savePhoto.textContent = "Сохранить";
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  closePopup(photoEditPopup);
}
