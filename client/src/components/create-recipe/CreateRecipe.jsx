import { useNavigate } from "react-router";
import { useCreateRecipe } from "../../api/recipeApi";
import { useState } from "react";
import useRecipeForm from "../../hooks/useRecipeForm";
import { useUserContext } from "../../contexts/UserContext";


export default function CreateRecipe () {
  const navigate = useNavigate();
  const {create: createRecipe} = useCreateRecipe();
  const [pending , setPending] = useState(false);
  const {_id} = useUserContext();


  const formSubmit = async (values) => {

    setPending(true)
        try {
          // TODO: Add error handling to the form
          const newRecipe = await createRecipe(values);
          console.log(newRecipe);
          
        } catch (error) {
            console.log('greshka' ,error);
        } finally {
          setPending(false);            
          navigate('/recipes/all-recipes')
        }

  }

  const {
    values, 
    changeHandler , 
    arrayChangeHandler,
    addArrayItem,
    removeArrayItem,
    submitHandler} = useRecipeForm(formSubmit ,{
    title: "",
    description: "",
    ingredients: [{ name: "", amount: "", unit: "" }],
    instructions: "",
    category: "",
    cookingTime: "",
    author: _id,
    imageUrl: "",
  });

  

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-6">
      <div className="w-full lg:w-5/12 h-full flex items-center justify-center">
        <div
          className="w-full h-[500px] bg-cover bg-center rounded-l-lg"
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg")',
          }}
        ></div>
      </div>
      <div className="w-full lg:w-7/12 flex items-center justify-center p-8 h-full">
        <div className="w-full max-w-lg">
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">Add a Recipe</h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter recipe title"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea
                name="description"
                value={values.description}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                placeholder="Describe your recipe"
                required
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Ingredients</label>
              {values.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    name="name"
                    value={ingredient.name}
                    onChange={(e) => arrayChangeHandler("ingredients" ,index, e)}
                    className="w-1/3 p-2 border rounded-lg"
                    placeholder="Ingredient Name"
                    required
                  />
                  <input
                    type="number"
                    name="amount"
                    value={ingredient.amount}
                    onChange={(e) => arrayChangeHandler( "ingredients" , index, e)}
                    className="w-1/3 p-2 border rounded-lg"
                    placeholder="Amount"
                    required
                  />
                  <input
                    type="text"
                    name="unit"
                    value={ingredient.unit}
                    onChange={(e) => arrayChangeHandler("ingredients" ,index, e)}
                    className="w-1/3 p-2 border rounded-lg"
                    placeholder="Unit (e.g., ml, tsp)"
                    required
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem("ingredients" , index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✖
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => addArrayItem("ingredients", { name: "", amount: "", unit: "" })} className="text-blue-600 hover:underline">
                + Add Ingredient
              </button>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Instructions</label>
              <textarea
                name="instructions"
                value={values.instructions}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                placeholder="Write cooking instructions"
                required
              ></textarea>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
              <select
                name="category"
                value={values.category}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select a category</option>
                <option value="Just Tasty">Just Tasty</option>
                <option value="Desserts">Desserts</option>
                <option value="Vegan Meals">Vegan Meals</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Cooking Time (minutes)</label>
              <input
                type="number"
                name="cookingTime"
                value={values.cookingTime}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter time in minutes"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Image link</label>
              <input
                type="url"
                name="imageUrl"
                value={values.imageUrl}
                onChange={changeHandler}
                className="w-full p-2 border rounded-lg"
                placeholder="Image url"
                required
              />
            </div>
            <input
              type="submit"
              value="Create Recipe"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
            >
            </input>
          </form>
        </div>
      </div>
    </section>
  );
}


