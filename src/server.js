import 'dotenv/config'
import express  from 'express';
const app = express();
import bodyParser from 'body-parser';

import  { getFruitsController, createFruitController } from './controller/fruitController.js';

const hostname = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  const fruitsResponse = await getFruitsController();
  res.json(fruitsResponse);
});

app.post('/fruits/add', async (req, res) => {
  try {
    const fruitsResponse = await createFruitController(req, res);
    res.json(fruitsResponse);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

