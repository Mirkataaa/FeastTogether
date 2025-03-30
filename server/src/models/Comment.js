import { model, Schema, Types } from "mongoose";

const commentSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipe: {
        type: Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    text: {
        type: String,
        required: [true, 'Please leave a comment']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Comment = model('Comment' , commentSchema);

export default Comment;