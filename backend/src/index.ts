// import express from 'express';
// import bookRouter from './bookRouter';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors()); 

// app.use(express.json());
// app.use('/api', bookRouter);
// app.get("/", (req, res) => {
//   res.send({
//       message: "Server is running",
//   });
// });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express from 'express';
import bookRouter from './bookRouter';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', bookRouter);

app.get("/", (req, res) => {
  res.send({
      message: "Server is running",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// import express from "express";
// import dotenv from "dotenv";
// import bookRouter from "./bookRouter"; // Ensure the path is correct

// const app = express();

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.use('/books', bookRouter);

// app.get("/", async (req, res) => {
//     res.send({
//         message: "Awesome it works",
//     });
// });

// app.listen(PORT, () => {
//     console.log("Server is running on port: " + PORT);
// });
