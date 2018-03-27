import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.json(Math.floor(Math.random() * Math.floor(10000)));
});

router.get('/error', (req, res, next) => {
  res.status(500).send({
    status: 500,
    message: Math.floor(Math.random() * Math.floor(10000))
  });
});

router.get('/throw', (req, res, next) => {
  throw new Error();
});

export default router;