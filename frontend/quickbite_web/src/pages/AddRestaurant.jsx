import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FooterButtom from "../components/FooterButtom";
const AddRestaurant = () => {
  return (
    <>
      <Navbar />
      <section className="addRestaurent pt-[50px] pb-[50px]">
        <div className="container addRestaurentWrapper">
          <h1 className="text-center text-[40px] mb-[30px] ">
            Add Your Restaurant
          </h1>
          <div className="w-full m-auto">
            <form action="">
              <div className="flex flex-wrap">
                <label className="mb-[10px]  text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantName">
                  Enter Your Restaurant Name:
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px] "
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantEmail">
                  Enter Your Restaurant Email:
                </label>
                <input
                  id="restaurantEmail"
                  type="email"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantImage">
                  Enter Your Restaurant Image:
                </label>
                <input
                  id="restaurantImage"
                  type="file"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantPhoneNo">
                  Enter Your Restaurant Phone Number:
                </label>
                <input
                  id="restaurantPhoneNo"
                  type="tel"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantDescription">
                  Enter Your Restaurant Description:
                </label>
                <input
                  id="restaurantDescription"
                  type="text"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantAddress">
                  Enter Your Restaurant Address:
                </label>
                <input
                  id="restaurantAddress"
                  type="text"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
                <label className="mb-[10px] text-[17px] text-[#8D8D8D] font-[500]" htmlFor="restaurantOpeningHours">
                  Enter Your Restaurant Opening Hours:
                </label>
                <input
                  id="restaurantOpeningHours"
                  type="time"
                  className="w-full border-b  border-[#8D8D8D] p-[10px] outline-none  mb-[20px] font-[500] text-[17px]"
                  required
                />
              </div>
            </form>
            <Link to="/addrestaurantmenu">
              <button type="submit" className="bg-[#FFA500] p-[15px] rounded-3xl font-[700] text-[15px] text-[#000]">
                Enter Your Restaurant Menu
              </button>
            </Link>

            <button className="w-[140px] bg-[#FFA500] p-[15px] rounded-3xl font-[700] block m-auto text-[#000] ">
              Submit
            </button>
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
          <FooterButtom/>
        </div>
      </section>
    </>
  );
};

export default AddRestaurant;
