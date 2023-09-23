import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_FFvfduuK7VX8L0fcMGeXqcOTqqUfq741DmMNvhDWFUEryQpwxGicHwgLBJ6D6J8C';


export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function fetchCatBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}