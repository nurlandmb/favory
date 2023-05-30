require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./routes/index');
const errorMiddleware = require('./middleware/error-middleware');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
const client = 'http://195.49.210.235:5000';
const dev = 'http://localhost:5173';
app.use(
  cors({
    credentials: true,
    // origin: false,
    origin: client,
  })
);
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose
      .connect(
        'mongodb+srv://almatyfavory:i8zUmtBU3Bo0PYab@cluster0.ndkoj2g.mongodb.net/?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((e) => console.log('Connected successfully'))
      .catch((e) => console.log(e));

    app.listen(PORT, () => {
      console.log('Working on ' + PORT);
    });
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/front/dist')));
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, '/front/dist/index.html'))
    );
  } catch (e) {
    console.log(e);
  }
};
start();
