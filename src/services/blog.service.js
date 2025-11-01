
import { Blog } from "../models/blog.model.js"

export const createBlogService = async(body)=>{

    try {
        const res = await Blog.create(body)
        return res 
    } catch (error) {
        return error 
    }

}


export const getAllBlogsService = async()=>{

    try {   
        const res = await Blog.find({})
        return res
    } catch (error) {
        return error
    }

}