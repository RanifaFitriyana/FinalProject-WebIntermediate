import React from 'react';
import { Link } from 'react-router-dom';

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, imageUrl }) => {
  return (
    <div className="border rounded shadow p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700">{author}</p>
      <Link to={`/book/${id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
