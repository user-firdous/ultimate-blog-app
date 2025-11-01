import express from 'express'
import { createBlog, getAllBlogs } from '../../controllers/blog.controller.js';
const router = express.Router()


router
  .post('/', createBlog )
  .get('/', getAllBlogs );
 

export const blogRouter = router;