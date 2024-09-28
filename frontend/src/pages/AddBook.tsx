import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../services/bookService';
import BookForm from '../components/BookForm';

const AddBook: React.FC = () => {
  const navigate = useNavigate();

  const handleAddBook = async (book: any) => {
    await createBook(book);
    navigate('/');
  };

  return (
  <div className="flex items-center bg-slate-300 justify-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-md">
        <h1 className="text-2xl text-center font-bold mb-6">Tambah Buku Baru</h1>
        <BookForm onSubmit={handleAddBook} />
        <div className="flex justify-center mt-3">
          <button onClick={() => navigate(`/`)} 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
