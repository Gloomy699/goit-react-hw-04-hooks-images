import axios from 'axios';

const KEY = '19032904-74cd0d38bd211043e9b213612';

const fetchImage = async (searchQuery, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data;
};

export default fetchImage;
