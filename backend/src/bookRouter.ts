// import { Router } from 'express';
// import { createBook, getAllBooks, getBookById, getBooksByAuthor, updateBook, deleteBook } from './bookController';

// const router = Router();

// router.post('/books', createBook);
// router.get('/books/:author', getBooksByAuthor);
// router.get('/books', getAllBooks);
// router.get('/books/:id', getBookById);
// router.put('/books/:id', updateBook);
// router.delete('/books/:id', deleteBook);

// export default router;


import { Router } from 'express';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from './bookController';

const router = Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;

