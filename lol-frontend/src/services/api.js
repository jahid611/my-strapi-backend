import axios from 'axios';

export const getChampions = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/champions?populate=*');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des champions :', error);
    return null;
  }
};
