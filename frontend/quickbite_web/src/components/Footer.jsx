import { assets } from "../assets/images/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="pt-[81px] pb-[58px] flex justify-between items-center">
        <div>
          <img src={assets.logo} alt="logo" />
          <p className="w-[311px] text-[15px] font-[700] mt-[33px]">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div>
          <h4>Get Exclusive Deals in your Inbox</h4>
          <div className="bg-[#ffffff] rounded-[120px]">
            <input
              className="w-[300px] rounded-[120px] bg-[#ffffff] py-[18px] pl-[30px] outline-none"
              type="email"
              placeholder="youremail@gmail.com"
            />
            <button className="py-[18px] pl-[42px] pr-[23px] bg-[#FC8A06] rounded-[120px] text-[#000000]">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-x-[14px] mt-[11px]">
            <Link to="">
              <img src={assets.facebookLogo} alt="facebook logo" />
            </Link>
            <Link to="">
              <img src={assets.instragramLogo} alt="instragram logo" />
            </Link>
            <Link to="">
              <img src={assets.tiktokLogo} alt="tiktok logo" />
            </Link>
            <Link to="">
              <img src={assets.snapChatLogo} alt="snapchat logo" />
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col ">
            <h3 className="text-[18px] mb-[10px]">Legal Pages</h3>
            <Link className="text-[15px] mb-[8px] hover:underline underline-offset-4">Terms and conditions</Link>
            <Link className="text-[15px] mb-[8px] hover:underline underline-offset-4">Privacy</Link>
            <Link className=" text-[15px] mb-[8px] hover:underline underline-offset-4">Cookies</Link>
            <Link className="text-[15px] hover:underline underline-offset-4">Modern Slavery Statement </Link>
          </div>
          <div className="flex flex-col pl-[20px]">
            <h3 className="text-[18px] mb-[10px]">Important Links</h3>
            <Link className="text-[15px] mb-[8px] hover:underline underline-offset-4">Get help</Link>
            <Link className="text-[15px] mb-[8px] hover:underline underline-offset-4">Add your restaurant</Link>
            <Link className="text-[15px] mb-[8px] hover:underline underline-offset-4">Sign up to deliver</Link>
            <Link className="text-[15px] hover:underline underline-offset-4">Create a business account </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
