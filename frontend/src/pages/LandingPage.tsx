import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../services/bookService';

const LandingPage: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className="bg-slate-300 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <h1 className="text-3xl font-bold">Daftar Buku</h1>
        </div>
        <div className='flex justify-center mb-8'> 
          <Link to="/add-book" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Tambah Buku
          </Link>
        </div>

        <div className="mt-11 grid grid-cols-1 md:grid-cols-3 md:px-16 lg:grid-cols-4 lg:w-9/12 lg:mx-auto lg:px-0 gap-6 px-5">
          {books.map((book) => (
            <div key={book.id} className="border-b-4 bg-white p-4 lg:hover:scale-105 transition-all ease-in-out rounded-lg flex flex-col items-center max-w-xs">
              <img src={book.imageUrl} alt={book.title} className="w-70 h-60" />
              <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline mt-2">
                Lihat Selengkapnya
              </Link>
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default LandingPage;
