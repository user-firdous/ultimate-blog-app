import express from 'express'
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from '../../controllers/blog.controller.js';
const router = express.Router()


router
  .post('/', createBlog )
  .get('/', getAllBlogs )
  .put('/:id', updateBlog)
  .delete('/:id', deleteBlog)

export const blogRouter = router;