import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import navIcon from "./assets/icons/navIcon.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="px-3 mx-auto">
      <div
        className={`navbar flex w-full transition-all ease-in-out ${
          scrolled
            ? "fixed top-0 left-0 right-0 bg-gray-200 z-10 h-[50px] md:h-[60px]"
            : "bg-slate-200 h-[70px] md:h-[80px]"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Home</li>
              </NavLink>
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Anime Series</li>
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Movies</li>
              </NavLink>
              <NavLink
                to="/cartoons"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Cartoons</li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-red-700 bg-clip-text text-transparent">
            Anime World
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex flex-row gap-4 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Home</li>
              </NavLink>
              <NavLink
                to="/anime"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Anime Series</li>
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Movies</li>
              </NavLink>
              <NavLink
                to="/cartoons"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 p-2 rounded-md text-white" : ""
                }
              >
                <li className="font-bold">Cartoons</li>
              </NavLink>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 mr-4 rounded-full">
            <img className="rounded-full" alt="Navigation Icon" src={navIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
