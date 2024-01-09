
export const gets = {
  baseApi: "https://skypro-music-api.skyeng.tech/",
  tracksAndPlayLists: {
    all: "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    oneTrack: "https://skypro-music-api.skyeng.tech/catalog/track/"
  },
  auth: {
    login: "https://skypro-music-api.skyeng.tech/user/login/",
    register: "https://skypro-music-api.skyeng.tech/user/signup/",
    getToken: "https://skypro-music-api.skyeng.tech/user/token/",
    getRefresh: "https://skypro-music-api.skyeng.tech/user/token/refresh/"

  }
};

const setToken = async ({email, password}) => {
  const response = await fetch(gets.auth.getToken, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  await localStorage.setItem("user", JSON.stringify(data))
};

export const tokenRefrash = async () => {
  const response = await fetch(gets.auth.getRefresh, {
    method: "POST",
    body: JSON.stringify({
      refresh: JSON.parse(localStorage.getItem("user")).refresh
    }),
    headers: {
      "content-type": "application/json"
    }
  });
  const data = await response.json();
  await localStorage.setItem("user", JSON.stringify({
    ...JSON.parse(localStorage.getItem("user")),
    ...data
  }))
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
  await setToken({email, password})
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
  await setToken({email, password})
  return data;
};

export const getTrackOnId = async (id) => {
  const response = await fetch(`${gets.tracksAndPlayLists.oneTrack}${id}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка при получении песни");
  }
  const data = await response.json();
  console.log("Выбранная песня ", data);
  return data;
};




