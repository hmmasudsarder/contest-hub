import { NavLink, Outlet } from "react-router-dom";
import { TbShoppingCartDollar } from "react-icons/tb";
import { FaChild, FaHome, FaThList, FaUsers } from "react-icons/fa";
import useAdmin from "../../hook/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? 
            <>
              <li>
                <NavLink to="/dashboard/user" className="font-bold">
                  <FaUsers /> Manage User
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage" className="font-bold">
                  <FaThList /> Manage Contest
                </NavLink>
              </li>
            </>
           : (
            <>
              <li>
                <NavLink to="/dashboard/participated" className="font-bold">
                  <TbShoppingCartDollar /> My Participated
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="font-bold">
                  <TbShoppingCartDollar /> My Participated
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className="font-bold">
                  <FaChild /> My Winning
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="font-bold">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
