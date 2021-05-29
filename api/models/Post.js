const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      max: 500,
    },
    likes: {
      type: Array,
      default: [],
    },
    comments:[{
      text:String,
      userId:{type:ObjectId,ref:"User"}
  }],
  userId:{
     type:ObjectId,
     ref:"User"
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);