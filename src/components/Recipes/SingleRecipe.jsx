import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const SingleRecipe = () => {
    return (
        <div className="card p-6 w-96 border border-[rgba(40,40,40,0.2)] ">
            <figure className="mb-6">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="">
                <h2 className="text-[#282828] text-xl font-semibold fontLexend mb-4">Spaghetti Bolognese</h2>
                <p className="text-[#878787] mb-4">Classic Italian pasta dish with savory meat sauce.</p>
                <hr />
                <div className="mt-6 mb-4">
                    <h1 className="fontLexend mb-4">Ingredients: 6</h1>
                    <ul className="list-disc ml-5 text-[#878787]">
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                </div>
                <hr />
                <div className="my-6 flex gap-4 text-[rgba(40,40,40,0.8)]">
                    <div className="flex items-center gap-2"><IoTimeOutline className="text-lg" /><p>30 minutes</p></div>
                    <div className="flex items-center gap-2"><AiOutlineFire className="text-lg" /><p>600 calories</p></div>
                </div>
                <div className="card-actions">
                    <button className="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;