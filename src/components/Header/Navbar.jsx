import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="p-0 navbar bg-base-100 my-6 lg:my-[50px]">
            <div className="navbar-start">
                {/* small device */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="btn p-0 hidden lg:block btn-ghost text-[#150B2B] font-bold lg:text-[32px]">Recipe Calories</a>
            </div>
            {/* large device */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <div className="relative">
                    <IoIosSearch className="absolute text-xl lg:text-2xl top-[9px] left-3 lg:top-3 lg:left-5" />
                    <input className="pl-9 pr-3 py-[6px] lg:pl-12 lg:pr-6 lg:py-3 text-[rgba(21,11,43,0.7)] bg-[#f3f3f4] rounded-full max-w-320 lg:max-w-[260px]" type="text" placeholder="Search" />
                </div>
                <a className="btn btn-circle text-2xl bg-[#0BE58A]"><CgProfile /></a>
            </div>
        </div>
    );
};

export default Navbar;