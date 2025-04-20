import { useState } from "react";
import axios from "axios";

function IngredientEditor({ ingredients, setIngredients, setRecipes }) {
  const [inputList, setInputList] = useState([...ingredients]);

  const handleChange = (value, index) => {
    const updated = [...inputList];
    updated[index] = value;
    setInputList(updated);
  };

  const handleAdd = () => {
    setInputList([...inputList, ""]);
  };

  const handleRemove = (index) => {
    const updated = inputList.filter((_, i) => i !== index);
    setInputList(updated);
  };

  const generateRecipes = async () => {
    try {
      const res = await axios.post("http://localhost:8000/generate_recipes", {
        ingredients: inputList,
      });
      setRecipes(res.data);
    } catch (err) {
      console.error("Recipe generation failed", err);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Edit Ingredients</h2>
      {inputList.map((item, index) => (
        <div key={index} className="flex mb-1">
          <input
            className="border p-1 mr-2 flex-1"
            value={item}
            onChange={(e) => handleChange(e.target.value, index)}
          />
          <button onClick={() => handleRemove(index)}>❌</button>
        </div>
      ))}
      <button onClick={handleAdd} className="mt-2 mr-4">➕ Add Ingredient</button>
      <button onClick={generateRecipes} className="mt-2 bg-green-500 text-white p-1 px-3 rounded">
        Generate Recipes
      </button>
    </div>
  );
}

export default IngredientEditor;
