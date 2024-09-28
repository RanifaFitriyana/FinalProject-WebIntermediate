import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../services/bookService';
import BookForm from '../components/BookForm';

const EditBook: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        console.log(`Fetching book with id: ${id}`);
        const data = await getBookById(parseInt(id, 10));
        console.log('Fetched book data:', data);
        setBook(data);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (updatedBook: any) => {
    if (id) {
      await updateBook(parseInt(id, 10), updatedBook);
      navigate(`/book/${id}`);
    }
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className="flex items-center bg-slate-300 justify-center min-h-screen">
      <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-md">
        <h1 className="text-2xl text-center font-bold mb-6">Edit Book</h1>
        <BookForm initialValues={book} onSubmit={handleSubmit} />
        <div className="flex justify-center mt-3">
          <button onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
