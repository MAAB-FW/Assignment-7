import SingleRecipe from "./SingleRecipe";

const Recipes = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            <SingleRecipe />
        </div >
    );
};

export default Recipes;