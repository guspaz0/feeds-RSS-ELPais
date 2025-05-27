import { Router } from 'express'
import NewsController from '../controllers/News.controller'

const router = Router()

router.get("/", NewsController.getNews)
router.post("/fetch", NewsController.fetchNews)
router.get("/search", NewsController.searchNews)

router.route("/:id")
  .get(NewsController.getNewsById)
  .delete(NewsController.deleteNew);

export default router