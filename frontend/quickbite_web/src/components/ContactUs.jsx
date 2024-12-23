import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterButtom from "./FooterButtom";
import { assets } from "../assets/images/assets";
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="contactUs">
        <div className="container">
          <div className="wrapper py-[70px] ">
            <h2 className="text-center text-[40px] font-[700]">Contact Us </h2>
            <p className="text-center mt-[10px] text-[#717171] font-[500] ">
              Any question or remarks? Just write us a message!
            </p>
            <div className="max-w-[1169px] pt-[69px] flex ">
              <div className="bg-[#FFA500] w-[491px] py-[40px] pl-[40px] rounded-[10px]">
                <h4 className="text-[28px] text-[#FFFFFF]">
                  Contact Information
                </h4>
                <p className="text-[18px] font-[500] text-[#FFFFFF] mt-[6px]">
                  Say something to start a live chat!
                </p>
                <div className="max-w-[337px] pt-[111px]">
                  <div className="flex gap-x-[25px] mb-[50px]">
                    <img src={assets.phoneLogo} alt="phone logo" />
                    <p className="text-[#FFFFFF] font-[500]">+1012 3456 789</p>
                  </div>
                  <div className="flex gap-x-[25px] mb-[50px]">
                    <img src={assets.emailLogo} alt="email logo" />
                    <p className="text-[#FFFFFF] font-[500]">demo@gmail.com</p>
                  </div>
                  <div className="flex gap-x-[25px] items-start">
                  <img src={assets.locationLogo} alt="location logo" />
                  <p className="text-[#FFFFFF] font-[500]">132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                  </div>
                </div>
              </div>
              <div>mohsin</div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer bg-[#D9D9D9]">
        <div className="container">
          <Footer />
        </div>
      </section>
      <section className="bg-[#03081F] ">
        <div className="container">
          <FooterButtom />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
