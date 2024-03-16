import PropTypes from 'prop-types';

const CookingList = ({ cookingItem, idx }) => {
    const { recipe_name, preparing_time, calories } = cookingItem
    return (
        <tr className="*:py-4 text-sm lg:text-base bg-[rgba(40,40,40,0.03)]">
            <td className="pl-6 pr-3 text-[rgba(40,40,40,0.8)] font-semibold">{idx + 1}</td>
            <td className="px-3 ">{recipe_name}</td>
            <td className="px-3 ">{preparing_time} minutes</td>
            <td className="px-3 ">{calories} calories</td>
        </tr>
    );
};

CookingList.propTypes = {
    cookingItem: PropTypes.object,
    idx: PropTypes.number
};

export default CookingList;