import express from 'express';
import NewsController from '../app/controllers/NewsController.js';


const router = express.Router();// tạo router

const newsController = new NewsController(); // tạo instance của NewsController

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
