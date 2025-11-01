import { createBlogService, getAllBlogsService } from "../services/blog.service.js";

export const getAllBlogs = async(req, res) => {
    const blogs = await getAllBlogsService()
    res.status(200).json({
        success : true ,
        message : " All blogs fetched " ,
        data : blogs
    })
}

export const createBlog = async(req, res) => {
   const body = req.body;
   console.log("body => " , body)
   if(!body.title || !body.description){
    res.status(400).json({
        success : false ,
        message : " ALL fileds are required !"
    })
   }
   const result = await createBlogService(body)
   console.log("result => " , result)
   
   res.status(201).json({
    success : true ,
    message : " Blog created successfully " ,
    data : result
   })
    
}