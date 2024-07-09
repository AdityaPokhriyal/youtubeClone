import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const REACT_APP_RAPID_API_KEY = '9331f549b1msh338f72d67104c6cp1e3989jsn19691115fd96'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
