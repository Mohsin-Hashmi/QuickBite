import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterButtom from "../components/FooterButtom";
import { assets } from "../assets/images/assets";
import { BASE_URL } from "../../src/utils/constant";
import { useState } from "react";
import axios from 'axios';
const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/users/contactus`, {firstName, lastName, emailId, phoneNumber,message}, {withCredentials:true});
      if (response.status===200) {
        localStorage.setItem("token", response.data.token);
      }
      setFirstName('');
      setLastName('');
      setEmailId('');
      setPhoneNumber('');
      setMessage('');
      alert("Message sent successfully");
    } catch (err) {
      err.Error(err.response?.data?.message, err.message);
    }
  };
  return (
    <>
      <Navbar />
      <section className="contactUs">
        <div className="container">
          <div className="wrapper py-[100px] ">
            <h2 className="text-center text-[40px] font-[700]">Contact Us </h2>
            <p className="text-center mt-[10px] mb-[50px] text-[#717171] font-[500] ">
              Any question or remarks? Just write us a message!
            </p>
            <div className="max-w-[1169px] p-[20px] flex border-2 border-[#FFA500] rounded-[10px]">
              <div className="bg-[#FFA500] w-[491px] py-[40px] pl-[40px] rounded-[10px]">
                <h4 className="text-[28px] text-[#FFFFFF]">
                  Contact Information
                </h4>
                <p className="text-[18px] font-[500] text-[#FFFFFF] mt-[6px]">
                  Say something to start a live chat!
                </p>
                <div className="w-[337px] pt-[111px]">
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
                    <p className="text-[#FFFFFF] font-[500]">
                      132 Dartmouth Street Boston, Massachusetts 02156 United
                      States
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-[60px] px-[50px] w-full">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap justify-between gap-y-[46px] items-center ">
                    <div className="min-w-[278px]">
                      <label
                        className="text-[15px] text-[#000] mb-[18px] ml-[3px] font-[500]"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="border border-[#ebedee] focus:border-[#FFA500] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter Your First Name"
                        required
                      />
                    </div>
                    <div className="min-w-[278px]">
                      <label
                        className="text-[15px] text-[#000] mb-[18px] ml-[3px] font-[500]"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="border border-[#ebedee] focus:border-[#FFA500] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Your Last Name"
                        required
                      />
                    </div>
                    <div className="min-w-[278px]">
                      <label
                        className="text-[15px] text-[#000] mb-[18px] ml-[3px] font-[500]"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="border border-[#ebedee] focus:border-[#FFA500] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                        type="email"
                        id="email"
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                    <div className="min-w-[278px]">
                      <label
                        className="text-[15px] text-[#000] mb-[18px] ml-[3px] font-[500]"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        className="border border-[#ebedee] focus:border-[#FFA500] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Your Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <label
                      className="text-[15px] text-[#000] mb-[18px] ml-[3px] font-[500]"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <input
                      className="border border-[#ebedee] focus:border-[#FFA500] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                      type="text"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter Your Message"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-[19px] px-[48px] mt-[45px] bg-[#FFA500] font-[500]  border rounded-[5px] float-right hover:bg-[#FFFFFF] hover:text-[#FFA500] hover:border hover:border-[#FFA500]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
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
