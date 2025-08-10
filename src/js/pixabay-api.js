import axios from 'axios';

const API_KEY = '51722364-670cbd21d6749aee290d6f753';
const BASE_URL = 'https://pixabay.com/api/';

const DEFAULT_PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  const q = String(query || '').trim();
  const params = { ...DEFAULT_PARAMS, q };

  return axios.get(BASE_URL, { params }).then(({ data }) => data);
}