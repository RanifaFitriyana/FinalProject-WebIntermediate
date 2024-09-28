import React, { useState, useEffect } from 'react';

interface BookFormProps {
  onSubmit: (book: any) => void;
  initialValues?: {
    title: string;
    author: string;
    description: string;
    publicationDate: string;
    imageUrl: string;
  };
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [author, setAuthor] = useState(initialValues?.author || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [publicationDate, setPublicationDate] = useState(initialValues?.publicationDate || '');
  const [imageUrl, setImageUrl] = useState(initialValues?.imageUrl || '');
  const [errors, setErrors] = useState({
    title: '',
    author: '',
    description: '',
    publicationDate: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (initialValues) {
      console.log('Setting initial values in form:', initialValues);
      setTitle(initialValues.title);
      setAuthor(initialValues.author);
      setDescription(initialValues.description);
      setPublicationDate(initialValues.publicationDate);
      setImageUrl(initialValues.imageUrl);
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      title: title ? '' : 'Title is required',
      author: author ? '' : 'Author is required',
      description: description ? '' : 'Description is required',
      publicationDate: publicationDate ? '' : 'Publication Date is required',
      imageUrl: imageUrl ? '' : 'Image URL is required',
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      onSubmit({ title, author, description, publicationDate, imageUrl });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Judul Buku
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
          Penulis
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.author && <p className="text-red-500 text-xs italic">{errors.author}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Deskripsi Buku
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publicationDate">
          Tanggal Publikasi
        </label>
        <input
          type="date"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.publicationDate && <p className="text-red-500 text-xs italic">{errors.publicationDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
          Link Gambar
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.imageUrl && <p className="text-red-500 text-xs italic">{errors.imageUrl}</p>}
      </div>

      <div className="flex items-center justify-center">
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Simpan
        </button>
      </div>

    </form>
  );
};

export default BookForm;
