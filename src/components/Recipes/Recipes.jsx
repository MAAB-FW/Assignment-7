import PropTypes from "prop-types"
import SingleRecipe from "./SingleRecipe";

const Recipes = ({ recipes }) => {
    console.log(recipes);
    return (
        <div className="lg:w-[782px] grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            {
                recipes.map(recipe => <SingleRecipe key={recipe.recipe_id} recipe={recipe} />)
            }

        </div >
    );
};

Recipes.propTypes = {
    recipes: PropTypes.object.isRequired
}

export default Recipes;