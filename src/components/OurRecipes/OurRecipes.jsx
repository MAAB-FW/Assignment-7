import { useEffect, useState } from "react";
import Recipes from "../Recipes/Recipes";
import WToCook from "../WToCook/WToCook";

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    console.log(recipes);
    return (
        <div className="w-[90%] lg:w-[82.5%] mx-auto ">
            <div className="text-center fontLexend mb-6 lg:mb-12">
                <h1 className="font-semibold text-[24px] lg:text-[40px] text-[#150B2B] mb-6">Our Recipes</h1>
                <p className="max-w-[80%] lg:max-w-[823px] mx-auto text-[rgba(21,11,43,0.6)] text-sm">Explore our diverse range of recipes, from hearty soups to guilt-free desserts. Each dish is meticulously crafted to strike the perfect balance between taste and calorie count.</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-6">
                <Recipes recipes={recipes} />
                <WToCook />
            </div>
        </div>
    );
};

export default OurRecipes;