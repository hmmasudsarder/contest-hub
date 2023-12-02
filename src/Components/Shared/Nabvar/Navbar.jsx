import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import disPic from "../../../assets/images/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const emailUs = user?.email;
  const userName = user?.displayName;
  const displayPic = user?.photoURL;
  // console.log(user)
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li className="font-semibold uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold uppercase">
        <NavLink to="/allContest">All Contest</NavLink>
      </li>
      <li>
      {user ? 
            ""
           : 
            <Link to="/login">
              <button className="font-semibold uppercase">Login</button>
            </Link>
          }
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl">
            <img
              className="w-[100px] h-[50px] rounded-lg lg:block  md:hidden min-[770]:hidden "
              src="https://i.ibb.co/CKDzjjn/download-10.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          
        </div>
        <div className="navbar-end -ml-20">
          <div className="dropdown">
            {user?.photoURL ? (
              <img
                tabIndex={0}
                className="btn btn-ghost btn-circle"
                src={displayPic}
              />
            ) : (
              <img
                src={disPic}
                tabIndex={0}
                className="btn btn-ghost btn-circle"
              />
            )}

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] ml-[-120px] shadow bg-base-100 rounded-box"
            >
              <li>
                <a className="px-20"></a>
              </li>
              <li className="font-bold">
                {user?.displayName ? <p>{userName}</p> : " " } 
              </li>
              <li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              <li className="">
                {user?.email ? (
                  <button onClick={handleLogOut} className="btn">
                    Sign Out
                  </button>
                ) : (
                  user?.displayName && <p>{userName}</p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
