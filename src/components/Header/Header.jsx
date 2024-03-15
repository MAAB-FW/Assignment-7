
import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="w-[90%] lg:w-[82.5%] mx-auto">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;