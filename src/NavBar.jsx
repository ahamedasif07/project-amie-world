import { NavLink } from 'react-router-dom';
import navIcon from './assets/icons/navIcon.png'

const NavBar = () => {
    return (
        <nav>
            <div className="navbar shadow-md fixed z-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink to='/' className={({isActive})=>isActive ? 'bg-green-500 p-2 rounded-md text-white' : 'border border-b-2 border-red-500'} >Home</NavLink>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl  font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-red-700 bg-clip-text text-transparent">Anime World</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to='/' className={({isActive})=>isActive ? 'bg-green-500 p-2 rounded-md text-white' : 'border border-b-2 border-red-500'} > <li className='px-1 mx-1'>Home</li></NavLink>


    <NavLink to='/animeSeries' className={({isActive})=>isActive ? 'bg-green-500 p-2 rounded-md text-white' : ""} > 
<li className='px-4'>Amine Series</li>
</NavLink>


    <NavLink to='/movies' className={({isActive})=>isActive ? 'bg-green-500 p-2 rounded-md text-white' : 'border border-b-2 border-red-500'} > <li className='px-1 grid justify-center'>Movies</li></NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 mr-4 rounded-full">
          <img className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src={navIcon} />
        </div>
       

      
  </div>
</div>
        </nav>
    );
};

export default NavBar;