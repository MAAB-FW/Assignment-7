import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const SingleRecipe = ({ recipe, wantToCookButton }) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = recipe
    return (
        <div className="card p-6 w-full border border-[rgba(40,40,40,0.2)] ">
            <figure className="mb-6">
                <img src={recipe_image} alt="Shoes" className="rounded-2xl" />
            </figure>
            <div className="">
                <h2 className="text-[#282828] text-xl font-semibold fontLexend mb-4">{recipe_name}</h2>
                <p className="text-[#878787] mb-4">{short_description}</p>
                <hr />
                <div className="mt-6 mb-4">
                    <h1 className="fontLexend mb-4">Ingredients: {ingredients.length}</h1>
                    <ul className="list-disc ml-5 text-[#878787]">
                        {ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
                    </ul>
                </div>
                <hr />
                <div className="my-6 flex gap-4 text-[rgba(40,40,40,0.8)]">
                    <div className="flex items-center gap-2"><IoTimeOutline className="text-lg" /><p>{preparing_time} minutes</p></div>
                    <div className="flex items-center gap-2"><AiOutlineFire className="text-lg" /><p>{calories} calories</p></div>
                </div>
                <div className="card-actions">
                    <button onClick={() => wantToCookButton(recipe)} className="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

SingleRecipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    wantToCookButton: PropTypes.func.isRequired
}

export default SingleRecipe;