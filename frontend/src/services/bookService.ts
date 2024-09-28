import axios from 'axios';

const API_URL = 'http://localhost:7000/api/books';

export const getAllBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const getBookById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('getBookById response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    return null;
  }
};

export const updateBook = async (id: number, book: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, book);
    console.log('updateBook response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    return null;
  }
};

export const createBook = async (book: any) => {
  const response = await axios.post(API_URL, book);
  return response.data;
};


export const deleteBook = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
