import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required: true
    },

    commentBy:{
        type:mongoose.Schema.Types.objectid,
        ref:"users",
        required:true
    },

    blogId: {
        type:mongoose.Schema.Types.objectid,
        ref:"blogs",
        required:true
    }

}, { timestamps : true , versionKey : false})

export const comment = mongoose.model("comment" , commentSchema )