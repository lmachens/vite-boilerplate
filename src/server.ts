import express from 'express';

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
