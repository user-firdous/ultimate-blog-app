import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type : String ,
        required : true
    },
    image_url : {
        type: String
    },
    post_time : {
        type:Date,
        default:Date.now()
    },

    posted_by :{
        type: mongoose.Schema.Types.objectId,
        ref: "users",
        required:true
    },

    like : [
        {
            type: mongoose.Schema.Types.objectId,
            ref: "users"
        }
    ]

    } , { timestamps : true } )

export const Blog = mongoose.model("blog" , blogSchema )