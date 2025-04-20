import { useState } from "react";
import ImageUpload from "./ImageUpload.jsx";
import IngredientEditor from "./IngredientEditor.jsx";
import RecipeList from "./RecipeList.jsx";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Recipe Generator</h1>
      <ImageUpload setIngredients={setIngredients} />
      {ingredients.length > 0 && (
        <IngredientEditor
          ingredients={ingredients}
          setIngredients={setIngredients}
          setRecipes={setRecipes}
        />
      )}
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default App;
