import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FooterButtom from "../components/FooterButtom";
const AddRestaurant = () => {
  return (
    <>
      <Navbar />
      <section className="addRestaurent pt-[100px] pb-[100px]">
        <div className="container addRestaurentWrapper">
          <h1 className="text-center text-[40px] mb-[30px] ">
            Add Your Restaurant
          </h1>
          <div className=" w-[100%] border border-[#FFA500]   m-auto shadow-inherit rounded-xl  p-[50px]">
            <form action="" className="">
              <div className="flex flex-wrap">
                <label
                  className="mb-[10px]  text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantName"
                >
                  Enter Your Restaurant Name:
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 "
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantEmail"
                >
                  Enter Your Restaurant Email:
                </label>
                <input
                  id="restaurantEmail"
                  type="email"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantImage"
                >
                  Enter Your Restaurant Image:
                </label>
                <input
                  id="restaurantImage"
                  type="file"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] bg-[#fff] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200 "
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantPhoneNo"
                >
                  Enter Your Restaurant Phone Number:
                </label>
                <input
                  id="restaurantPhoneNo"
                  type="tel"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantDescription"
                >
                  Enter Your Restaurant Description:
                </label>
                <input
                  id="restaurantDescription"
                  type="text"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantAddress"
                >
                  Enter Your Restaurant Address:
                </label>
                <input
                  id="restaurantAddress"
                  type="text"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                  required
                />
                <label
                  className="mb-[10px] text-[15px] text-[#8D8D8D] font-[500]"
                  htmlFor="restaurantOpeningHours"
                >
                  Enter Your Restaurant Opening Hours:
                </label>
                <input
                  id="restaurantOpeningHours"
                  type="time"
                  className="border border-[#ebedee] focus:border-[#FFA500] mb-[20px] hover:border-[#FFA500] font-[500] text-[15px] placeholder:text-[13px] text-[#000] block w-full p-[10px] outline-none rounded-lg transition-all duration-200"
                  required
                />
              </div>

              <Link to="/addrestaurantmenu">
                <button
                  type="submit"
                  className="bg-[#FFA500] p-[15px] rounded-[5px] mt-[20px]  font-[500] text-[15px] text-[#000] border hover:bg-[#FFFFFF] hover:text-[#FFA500] hover:border-[#FFA500]"
                >
                  Enter Your Restaurant Menu
                </button>
              </Link>

              <button className="w-[140px] bg-[#FFA500] p-[15px] rounded-[5px] font-[500]  block mt-[20px] m-auto border text-[#000] hover:bg-[#FFFFFF] hover:text-[#FFA500] hover:border-[#FFA500]">
                Submit
              </button>
            </form>
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

export default AddRestaurant;
