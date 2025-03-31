import { Schema, Types , model } from "mongoose";

const ratingSchema = new Schema({
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
    score: {
        type: Number,
        required: true,
        min:1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Rating = model('Rating' , ratingSchema);

export default Rating;