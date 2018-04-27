import { connect } from "net";
import { mongo } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
   title:{
       type:String,
       trim:true,
       required:"Title is required"
   },
   date:{
       type:Date,
       default:Date.now,
       required:"Date is required"
   },
   url:{
       type:String,
       required:true,
       required:"URL is required",
       unique:true
   }
});

//creates the model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
