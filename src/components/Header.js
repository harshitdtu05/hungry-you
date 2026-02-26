import { LOGO_URL } from "../Utilities/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import UserContext from "../Utilities/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  const userStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-rose-200 shadow-lg">
      <div className="logo-container">
        <img
          className="py-4 px-6 w-[100px]  rounded-full transition-transform hover:scale-110"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            Online Status : {userStatus === true ? "✅" : "❌"}
          </li>
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            <Link to="/About"> About Us</Link>
          </li>
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            <Link to="/Contact"> Contact Us</Link>
          </li>
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            {" "}
            <Link to="/Grocery">Grocery</Link>{" "}
          </li>
          <li className="px-4 transition-transform duration-300 hover:scale-110 font-bold font-mono hover:-translate-y-1 hover:text-orange-500">
            <Link to="/Cart"> 🛒 - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500">
            User : {data.name}
          </li>
          <button
            className="px-4 font-mono font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:text-orange-500"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
