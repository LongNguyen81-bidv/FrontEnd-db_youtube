import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    // 'token': localStorage.getItem("LOGIN_USER")
  },
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


// get danh sách video
export const getVideoApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video`);

  return data.data;
};

// get danh sách type video
export const getVideoTypeApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-type`);

  return data.data;
};

// get danh sách video theo id type 
export const getVideoWithTypeApi = async (typeId) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-with-type/${typeId}`);

  return data.data;
};

// get danh sách video page
export const getVideoPageApi = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/video/get-video-page/${page}`);

  return data.data;
};