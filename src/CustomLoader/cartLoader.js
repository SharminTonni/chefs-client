import { getFromDB } from "../utilites/FakeDB";

const cartLoader = async () => {
  const loadedRecipes = await fetch(
    "https://chef-server-sharmintonni.vercel.app/recipes"
  );

  const recipes = await loadedRecipes.json();

  const storedCart = getFromDB();
  const savedCart = [];
  for (const id in storedCart) {
    const addedRecipe = recipes.find((recipe) => recipe.id == id);
    if (addedRecipe) {
      savedCart.push(addedRecipe);
    }
  }
  return savedCart;
};

export default cartLoader;
