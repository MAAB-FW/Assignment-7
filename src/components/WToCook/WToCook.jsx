
const WToCook = () => {
    return (
        <div className="lg:w-[514px] mx-auto border rounded-2xl">
            <div>
                <div className="lg:w-[350px] mx-auto text-center mt-8 mb-6">
                    <h1 className="fontLexend font-semibold text-2xl mb-4">Want to cook: 01</h1><hr />
                </div>
                <table className="w-full mx-auto text-[#878787]">
                    <thead className="font-medium *:pb-4 *:px-3 text-left">
                        <th className=""></th>
                        <th className="">Name</th>
                        <th className="">Time</th>
                        <th className="">Calories</th>
                        <th className=""></th>
                    </thead>
                    <tbody className="*:py-4 bg-[rgba(40,40,40,0.03)]">
                        <td className="pl-6 pr-3 text-[rgba(40,40,40,0.8)] font-semibold">1</td>
                        <td className="px-3 ">Chicken Caesar Salad</td>
                        <td className="px-3 ">20 minutes</td>
                        <td className="px-3 ">400 calories</td>
                        <td className="pl-3 pr-6">
                            <button className="btn bg-[#0BE58A] font-medium fontLexend rounded-full">Preparing</button>
                        </td>
                    </tbody>
                </table>
            </div>
            <div>
                <div className="lg:w-[350px] mx-auto text-center mt-8 mb-6">
                    <h1 className="fontLexend font-semibold text-2xl mb-4">Currently cooking: 02</h1><hr />
                </div>
                <table className="w-full mx-auto text-[#878787]">
                    <thead className="font-medium *:pb-4 *:px-3 text-left">
                        <th className=""></th>
                        <th className="">Name</th>
                        <th className="">Time</th>
                        <th className="">Calories</th>
                    </thead>
                    <tbody className="*:py-4 bg-[rgba(40,40,40,0.03)]">
                        <td className="pl-6 pr-3 text-[rgba(40,40,40,0.8)] font-semibold">1</td>
                        <td className="px-3 ">Spaghetti Bolognese</td>
                        <td className="px-3 ">20 minutes</td>
                        <td className="px-3 ">400 calories</td>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default WToCook;