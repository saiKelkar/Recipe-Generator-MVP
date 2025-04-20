function RecipeList({ recipes }) {
    return (
      <div>
        <h2 className="text-lg font-semibold mb-2">Recipes</h2>
        {recipes.map((recipe) => (
          <a
            key={recipe.id}
            href={`https://spoonacular.com/recipes/${recipe.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}-${recipe.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 border p-3 rounded shadow hover:bg-gray-50 transition"
          >
            <h3 className="text-md font-bold">{recipe.title}</h3>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-48 rounded mt-2"
            />
          </a>
        ))}
      </div>
    );
  }
  
export default RecipeList