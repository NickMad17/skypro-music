

const gets = {
  tracksAndPlayLists: {
    all: "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    oneTrack: "https://skypro-music-api.skyeng.tech/catalog/track/"
  },
  auth: {
    getTocken: "https://skypro-music-api.skyeng.tech/user/token/"
  }
};

const getToken = async () => {
  const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
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

export const getAllTracks = async () => {
  const token = await getToken()
  const response = await fetch(gets.tracksAndPlayLists.all, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok){
    throw new Error("Ошибка при получении токена")
  }
  const data = await response.json();
  console.log("Список песен ",data);
  return data;
};

export const getTrackOnId = async (id) => {
  const token = await getToken()
  const response = await fetch(`${gets.tracksAndPlayLists.oneTrack}${id}` , {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok){
    throw new Error("Ошибка при получении песни")
  }
  const data = await response.json();
  console.log("Выбранная песня ",data);
  return data;
};




