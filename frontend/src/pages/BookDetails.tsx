import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, deleteBook } from '../services/bookService';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [book, setBook] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (id) {
          const response = await getBookById(parseInt(id, 10));
          console.log('Fetched book:', response); 
          setBook(response);
        }
      } catch (error) {
        console.error('Failed to fetch book:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteBook(parseInt(id, 10));
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-5 text-center">{book.title}</h1>
        <div className="flex justify-center mb-4">
          <img src={book.imageUrl} alt={book.title} className="w-70 h-80 object-cover rounded" />
        </div>
        <p className="text-xl mt-2 font-semibold">Penulis: <span className="font-normal">{book.author}</span></p>
        <p className="text-xl mt-2 font-semibold">Deskripsi Buku: <span className="font-normal">{book.description}</span></p>
        <p className="text-xl mt-2 mb-7 font-semibold">Tanggal Publikasi: <span className="font-normal">{new Date(book.publicationDate).toLocaleDateString()}</span></p>
        <div className="flex justify-center mt-2">
          <button
            onClick={() => navigate(`/edit-book/${book.id}`)}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
          >
            Hapus
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate(`/`)}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
);
};

export default BookDetails;
