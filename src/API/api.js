import { useContext } from "react";
import { Context } from "../context/context";

const gets = {
  tracksAndPlayLists: {
    all: "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    oneTrack: "https://skypro-music-api.skyeng.tech/catalog/track/"
  },
  auth: {
    login: "https://skypro-music-api.skyeng.tech/user/login/",
    register: "https://skypro-music-api.skyeng.tech/user/signup/",
    getToken: "https://skypro-music-api.skyeng.tech/user/token/"

  }
};

const getToken = async () => {
  const response = await fetch(gets.auth.getToken, {
    method: "POST",
    body: JSON.stringify({
      email: "vlad030911@gmail.com",
      password: "Nikita176n"
    }),
    headers: {
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  return data.access;
};

export const getLogin = async ({ email, password }) => {
  const response = fetch(gets.auth.login, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json"
    }
  });
  if ((await response).status === 401) {
    throw new Error("Такого пользователя не существует");
  } else if ((await response).status === 500) {
    throw new Error("Сервер упал");
  } else if ((await response).status === 400) {
    throw new Error("Есть незаполненные поля");
  }
  if (!(await response).ok) {
    throw new Error("У вас проблемы с интернетом");
  }
  const data = (await response).json();
  return data;
};

export const getRegister = async ({ email, password }) => {
  const response = fetch(gets.auth.register, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json"
    }
  });
  if ((await response).status === 401) {
    throw new Error("Такого пользователя не существует");
  } else if ((await response).status === 500) {
    throw new Error("Сервер упал");
  } else if ((await response).status === 400) {
    throw new Error("Такой пользователь уже существует")
  }
  if (!(await response).ok) {
    throw new Error("У вас проблемы с интернетом");
  }
  const data = (await response).json();
  return data;
};

export const getAllTracks = async () => {
  const token = await getToken();
  const response = await fetch(gets.tracksAndPlayLists.all, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Ошибка при получении токена");
  }
  const data = await response.json();
  console.log("Список песен ", data);
  return data;
};

export const getTrackOnId = async (id) => {
  const token = await getToken();
  const response = await fetch(`${gets.tracksAndPlayLists.oneTrack}${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("Ошибка при получении песни");
  }
  const data = await response.json();
  console.log("Выбранная песня ", data);
  return data;
};




