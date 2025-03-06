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
        name: {
            type: String,
            required: [true , 'Ingredient name is required!']
        },
        amount: {
            type: String,
            required: [true , 'Amount must be text - e.g., "1 cup" , "2 tsp"']
        },
        baseAmount: {
            type: Number,
            required: [true , 'Please enter a number']
        },
        unit: {
            type: String,
            required: [true , 'Please enter a measurment unit - e.g., "ml" , "tsp"']
        }
    }],
    instructions: {
        type: String,
        required: [true , 'Instructions are required']
    },
    category: {
        type: String,
        enum: ['Just Tasty' , 'Desserts' , 'Vegan Meals'],
        required: [true , 'Please select category']
    },
    cookingTime: {
        type: Number,
        required: [true , "Please enter cooking time"],
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