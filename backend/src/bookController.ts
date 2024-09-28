import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await prisma.books.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.books.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const booksData = req.body;
    const book = await prisma.books.create({
      data: {
        title: booksData.title,
        author: booksData.author,
        description: booksData.description,
        publicationDate: new Date(booksData.publicationDate),
        imageUrl: booksData.imageUrl,
      },
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
};


export const updateBook = async (req, res) => {
  const { id } = req.params;
  const booksData = req.body;

  try {
    const updatedBook = await prisma.books.update({
      where: { id: parseInt(id, 10) },
      data: {
        title: booksData.title,
        author: booksData.author,
        description: booksData.description,
        publicationDate: new Date(booksData.publicationDate),
        imageUrl: booksData.imageUrl,
      },
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};


export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.books.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};


















// import { PrismaClient } from '@prisma/client';
// import { Request, Response } from 'express';

// const prisma = new PrismaClient();
// const bookClient = prisma.books;

// // Get all books
// export const getAllBooks = async (req, res) => {
//   try {
//     const allBooks = await bookClient.findMany();
//     res.status(200).send({
//       msg: "Get all books successfully",
//       data: allBooks,
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(500).send({
//       msg: "Failed to get books",
//       error: e.message,
//     });
//   }
// };


// //getAuthorById
// export const getBookById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const book = await prisma.books.findUnique({
//       where: { id: parseInt(id, 10) },
//     });
//     if (book) {
//       res.status(200).json(book);
//     } else {
//       res.status(404).json({ error: 'Book not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch book' });
//   }
// };

// // export const getBookById = async (req, res) => {
// //   const { id } = req.params;
// //   try {
// //     const book = await prisma.books.findUnique({
// //       where: { id: parseInt(id, 10) },
// //     });
// //     if (book) {
// //       res.status(200).json(book);
// //     } else {
// //       res.status(404).json({ error: 'Book not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to fetch book' });
// //   }
// // };

// // Get books by author
// export const getBooksByAuthor = async (req: Request, res: Response) => {
//   const { author } = req.params;
//   try {
//     const booksByAuthor = await bookClient.findMany({
//       where: { author },
//     });
//     res.status(200).send({
//       msg: `Get books by author ${author} successfully`,
//       data: booksByAuthor,
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(500).send({
//       msg: `Failed to get books by author ${author}`,
//       error: e.message,
//     });
//   }
// };

// // Create a new book
// // export const createBook = async (req: Request, res: Response) => {
// //   const { title, author, description, imageUrl } = req.body;
// //   try {
// //     const newBook = await prisma.books.create({
// //       data: {
// //         title,
// //         author,
// //         description,
// //         imageUrl
// //       },
// //     });
// //     res.status(201).json(newBook);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to create book' });
// //   }
// // };

// export const createBook = async (req, res) => {
//   try {
//     const booksData = req.body;
//     const book = await bookClient.create({
//       data: {
//         title: booksData.title,
//         author: booksData.author,
//         description: booksData.description,
//         publicationDate: booksData.publicationDate,
//         imageUrl: booksData.imageUrl,
//       },
//     });
//     res.status(201).send({
//       msg: "Created book successfully",
//       data: book,
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(500).send({
//       msg: "Failed to create book",
//       error: e.message,
//     });
//   }
// };

// // Update a book
// export const updateBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const booksData = req.body;

//     console.log('ID:', id);
//     console.log('Books Data:', booksData);

//     const updatedBook = await bookClient.update({
//       where: { id: parseInt(id, 10) },
//       data: {
//         title: booksData.title,
//         author: booksData.author,
//         description: booksData.description,
//         publicationDate: new Date(booksData.publicationDate),
//         imageUrl: booksData.imageUrl,
//       },
//     });

//     res.status(200).send({
//       msg: "Updated book successfully",
//       data: updatedBook,
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(500).send({
//       msg: "Failed to update book",
//       error: e.message,
//     });
//   }
// };

// // Delete a book
// export const deleteBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await bookClient.delete({
//       where: { id: parseInt(id, 10) },
//     });
//     res.status(200).send({
//       msg: "Deleted book successfully",
//     });
//   } catch (e) {
//     console.error(e);
//     res.status(500).send({
//       msg: "Failed to delete book",
//       error: e.message,
//     });
//   }
// };

