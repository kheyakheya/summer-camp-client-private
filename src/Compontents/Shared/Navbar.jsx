import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
const {user, logOut}=useContext(AuthContext);
const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch((error)=>{console.log(error)})

}
const menuItems=
<>
        
<li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-2xl font-bold bg-transparent' : 'myMenu')}>Home</NavLink>
</li>
<li><NavLink to='/instructor' className={({ isActive }) => (isActive ? 'text-2xl font-bold bg-transparent' : 'myMenu')}>Instructor</NavLink>
</li> 
<li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-2xl font-bold bg-transparent' : 'myMenu')}>Classes</NavLink>
</li>

 {user?.email ? 
<>
<li><NavLink to='/dashboard/welcome' className={({ isActive }) => (isActive ? 'text-2xl font-bold bg-transparent' : 'myMenu')}>Dashboard</NavLink>
 </li>



    <img className='h-12 w-12  rounded-full' src={user?.photoURL || 'https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg'} alt=""  title={user.displayName} />

<li><Link  className= 'myMenu'><button onClick={handleLogout}>Logout</button></Link>
</li>
</> : <li><NavLink to='/login' className={({ isActive }) => (isActive ? 'text-2xl font-bold bg-transparent' : 'myMenu')}>Login</NavLink>
</li> 
} 
</>
return (
    <>
        <div className="max-w-screen-2xl mx-auto fixed z-10 navbar bg-opacity-100 bg-red-700 text-white px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-opacity-30 bg-black text-white">
                       {menuItems}
                    </ul>
                </div>
                <Link to='/' className=".myMenu normal-case text-xl">Sporting Star</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {menuItems}
                </ul>
            </div>
            
        </div>
    </>
);

};

export default Navbar;