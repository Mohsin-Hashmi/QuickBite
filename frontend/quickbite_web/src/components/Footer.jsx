import { assets } from "../assets/images/assets";
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
              className="w-[381px] rounded-[120px] bg-[#ffffff] py-[18px] pl-[30px] outline-none"
              type="email"
              placeholder="youremail@gmail.com"
            />
            <button className="py-[18px] pl-[42px] pr-[23px] bg-[#FC8A06] rounded-[120px] text-[#000000]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
