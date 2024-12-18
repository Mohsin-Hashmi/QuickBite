import { assets } from "../assets/images/assets";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInBtn = () => {
    navigate("/signup");
  };
  return (
    <>
      
        <div className="navbar">
          <div className="container">
            <nav className="flex items-center justify-between pt-[30px] font-[700]">
              <Link to="">
                <img src={assets.logo} alt="logo" />
              </Link>

              <ul className="navbar-menu flex items-center gap-x-[62px]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Menu</Link>
                </li>
                <li>
                  <Link to="/">Add Restaurant</Link>
                </li>
                <li>
                  <Link to="/">Our Policies</Link>
                </li>
                <li>
                  <Link to="/">Contant us</Link>
                </li>
              </ul>
              <div className="flex gap-x-[50px]">
                <img src={assets.search_icon} alt="search icon" />
                <div className="">
                  <img src={assets.basket_icon} alt="backet icon" />
                  <div className="dot"></div>
                </div>
              </div>
              <button
                onClick={handleSignInBtn}
                className=" w-[100px] bg-[#FFA500] p-[15px] rounded-full border border-transparent hover:border-[#FFA500] hover:bg-[#FFFFFF]"
              >
                Sign in
              </button>
            </nav>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
