import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BookDetail from './pages/BookDetails';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;
