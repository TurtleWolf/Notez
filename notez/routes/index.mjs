import { default as express } from 'express';
export const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  //... placeholder for Notes home page code
  res.render('index', { title: 'Notes' });
});
