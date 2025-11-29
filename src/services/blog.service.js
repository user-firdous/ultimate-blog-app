
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

export const updateBlogService = async(id, body)=>{

    try {
        const res = await Blog.findByIdAndUpdate(id, body, { new: true })
        return res
    } catch (error) {
        return error
    }

}

export const deleteBlogService = async(id)=>{

    try {
        const res = await Blog.findByIdAndDelete(id)
        return res
    } catch (error) {
        return error
    }

}