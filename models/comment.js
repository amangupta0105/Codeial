const mongoose = require('mongoose');
const commetSchema = new mongoose.Schema({
    content:{
    type:String,
    required:true
    },
    //comment belong to a user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
{
    timestamps:true
});

const Comment = mongoose.model('Comment',commetSchema);

module.exports=Comment;