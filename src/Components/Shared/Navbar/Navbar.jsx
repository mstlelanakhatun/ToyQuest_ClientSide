import { Link } from "react-router-dom";
import { FaSlideshare } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthenticationPart/AuthProvider";
import ActiveLink from "../../ActiveLink/ActiveLink";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch()
    }

    const navItems = <>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/allToys">All Toys</ActiveLink>
        <ActiveLink to="/myToys">My Toys</ActiveLink>
        <ActiveLink to="/addToys">Add A Toy</ActiveLink>
        <ActiveLink to="/blogs">Blogs</ActiveLink>

    </>
    const navEnd = <>
        {user ? <img title={user.displayName} className='w-[52px] md:w-[60px] text-indigo-500 rounded-full h-[52px] md:h-[60px]' src={user?.photoURL} alt="" /> : ''}
        {user ? <Link onClick={handleLogOut} to='/login' className="button button-primary bg-indigo-500 ms-4 md:ms-8">Log Out</Link>
            : <Link to='/login' className="button button-primary bg-indigo-500 ms-4 md:ms-8">Login</Link>
        }
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="flex normal-case">
                    <FaSlideshare className="mr-4 h-14 w-14 hidden md:flex text-indigo-500" />
                    <span className="self-center  text-2xl md:text-3xl font-semibold whitespace-nowrap text-indigo-500">ToyQuest</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {navEnd}
            </div>
        </div>
    );
};

export default Navbar;