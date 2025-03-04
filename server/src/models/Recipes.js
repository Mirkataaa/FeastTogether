import { Schema , Types , model } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: [true , ['Recipe title is required']],
        trim: true,
    },
    description: {
        type: String,
        required: [true , 'Description is required']
    },
    ingredients: [{
        type: String,
        required: [true , 'Ingredients are required']
    }],
    instructions: [{
        type: String,
        required: [true , 'Instructions are required']
    }],
    category: {
        type: String,
        enum: ['Just Tasty' , 'Desserts' , 'Vegan Meals'],
        required: [true , 'Please select category']
    },
    // * Photos with link - *Check how to upload photos*
    images: [{
        type: String
    }],
    author: {
        type: Types.ObjectId,
        ref: 'User',
        required: true 
    },
    ratings: [{
        user: Types.ObjectId,
        score: Number
    }],
    averageRating: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Recipe = model('Recipe' , recipeSchema);

export default Recipe;