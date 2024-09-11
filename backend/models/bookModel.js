import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String, 
      required: true
    },
    publishedYear: {
      type: Number, 
      required: true
    },
    description:{
      type: String,
      required: true
    }
  },
    {
      timeStamp: true
    }
)

export const Book = mongoose.model('Cat', bookSchema)
