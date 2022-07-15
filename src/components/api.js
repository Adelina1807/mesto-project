export function getRes(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getProfileInfo() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me", {
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
    },
  });
}

export function getCards() {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards", {
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
    },
  });
}

export function updateProfileInfo(name, job) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me", {
    method: "PATCH",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: job,
    }),
  });
}

export function appendCard(name, link) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/cards", {
    method: "POST",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
}

export function deleteCard(id) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-12/cards/${id}`, {
    method: "DELETE",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
    },
  });
}

export function putLike(id) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-12/cards/likes/${id}`, {
    method: "PUT",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
    },
  });
}

export function deleteLike(id) {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-12/cards/likes/${id}`, {
    method: "DELETE",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
    },
  });
}

export function updateProfilePhoto(link) {
  return fetch("https://nomoreparties.co/v1/plus-cohort-12/users/me/avatar", {
    method: "PATCH",
    headers: {
      authorization: "c2ce2dee-bf82-4d66-8d2d-d2557a6d7d18",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: link,
    }),
  });
}
