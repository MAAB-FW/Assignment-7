import PropTypes from 'prop-types';
const PrepareList = ({ item, idx, preparingButton }) => {
    const { recipe_name, preparing_time, calories } = item
    return (
        <tr className="*:py-4 text-sm lg:text-base bg-[rgba(40,40,40,0.03)]">
            <td className="pl-6 pr-3 text-[rgba(40,40,40,0.8)] font-semibold">{idx + 1}</td>
            <td className="px-3 ">{recipe_name}</td>
            <td className="px-3 ">{preparing_time} minutes</td>
            <td className="lg:pr-3 pl-3 ">{calories} calories</td>
            <td className="lg:pl-3 lg:pr-6">
                <button onClick={() => preparingButton(item)} className="btn bg-[#0BE58A] font-medium fontLexend rounded-full">Preparing</button>
            </td>
        </tr>
    );
};

PrepareList.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number,
    preparingButton: PropTypes.func
}

export default PrepareList;