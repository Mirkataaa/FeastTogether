import RecipeCard from "./recipe-card/RecipeCard";

const recipes = [
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
  {
    title: "Chocolate Cake Pops",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Desserts", "Pastry"],
  },
  {
    title: "Spicy Gnocchi Bake",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Comfort Food", "Quick Meal"],
  },
  {
    title: "Fresh Avocado Toast",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
    tags: ["Healthy", "Breakfast"],
  },
];

// ? Add fav list ?
  
  export function Recipe() {
    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] ">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} index={index} /> // ! change key with id later 
        ))}
      </div>
    );
  }