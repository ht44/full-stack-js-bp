
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';

import debug from './routes/debug';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

}

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../../client/dist')));

app.use('/api/debug', debug);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/../../client/dist/index.html'));
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json(err.message);
});

export default app;