import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useEditRecipe, useRecipe } from "../../api/recipeApi";
import useRecipeForm from "../../hooks/useRecipeForm";

export default function EditRecipe() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { recipe } = useRecipe(recipeId);
  const { edit: editRecipe } = useEditRecipe();
  const [pending, setPending] = useState(false);

  

  const formSubmit = async (values) => {
    setPending(true);
    try {
      await editRecipe(recipeId, values);
      navigate("/recipes/all-recipes");
    } catch (error) {
      console.error("Error updating recipe", error);
    } finally {
      setPending(false);
    }
  };

  const {
    values,
    setValues,
    changeHandler,
    arrayChangeHandler,
    addArrayItem,
    removeArrayItem,
    submitHandler,
  } = useRecipeForm(formSubmit, {
    title: "",
    description: "",
    ingredients: [{ name: "", amount: "", unit: "" }],
    instructions: "",
    category: "",
    cookingTime: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (recipe) {
      setValues(recipe);
    }
  }, [recipe , setValues]);

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-xl font-bold text-gray-900 md:text-2xl">Edit Recipe</h1>
        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Recipe Title</label>
            <input
              type="text"
              name="title"
              defaultValue={values.title}
              onChange={changeHandler}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              name="description"
              defaultValue={values.description}
              onChange={changeHandler}
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Ingredients</label>
            {values.ingredients?.map((ingredient, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  name="name"
                  defaultValue={ingredient.name}
                  onChange={(e) => arrayChangeHandler("ingredients", index, e)}
                  className="w-1/3 p-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  name="amount"
                  defaultValue={ingredient.amount}
                  onChange={(e) => arrayChangeHandler("ingredients", index, e)}
                  className="w-1/3 p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="unit"
                  defaultValue={ingredient.unit}
                  onChange={(e) => arrayChangeHandler("ingredients", index, e)}
                  className="w-1/3 p-2 border rounded-lg"
                  required
                />
                {index > 0 && (
                  <button type="button" onClick={() => removeArrayItem("ingredients", index)} className="text-red-500 hover:text-red-700">✖</button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem("ingredients", { name: "", amount: "", unit: "" })} className="text-blue-600 hover:underline">+ Add Ingredient</button>
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
              defaultValue={values.cookingTime}
              onChange={changeHandler}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={values.imageUrl}
              onChange={changeHandler}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <input type="submit" value={pending ? "Updating..." : "Update Recipe"} className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5" disabled={pending} />
        </form>
      </div>
    </section>
  );
}
