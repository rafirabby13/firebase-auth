import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-3 justify-center text-2xl font-bold">
            <NavLink   className='border-2 p-2 ' to='/'>Home</NavLink>
            <NavLink className='border-2 p-2 ' to='/login'>Login</NavLink>
            <NavLink  className='border-2 p-2 ' to='/SignInEmailPass'>Sign In Email &  Pass</NavLink>
            <NavLink  className='border-2 p-2 ' to='/loginEmailPass'>Log In Email &  Pass</NavLink>

        </div>
    );
};

export default Header;