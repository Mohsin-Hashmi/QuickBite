import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FooterButtom from "../components/FooterButtom";
const AddRestaurant = () => {
  return (
    <>
      <Navbar />
      <section className="addRestaurent ">
        <div className="addRestaurentWrapper pt-[50px] pb-[50px]">
          <h1 className="text-center text-[40px] ">
            Add Your Restaurant
          </h1>
          <div className="max-w-[900px] m-auto">
            <form action="">
              <div className="flex flex-wrap">
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Name:
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  placeholder="Enter Your Restaurant Name"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantEmail">
                  Enter Your Restaurant Email:
                </label>
                <input
                  id="restaurantEmail"
                  type="email"
                  placeholder="Enter Your Restaurant Email"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantImage">
                  Enter Your Restaurant Image:
                </label>
                <input
                  id="restaurantImage"
                  type="file"
                  placeholder="Enter Your Restaurant Image"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantPhoneNo">
                  Enter Your Restaurant Phone Number:
                </label>
                <input
                  id="restaurantPhoneNo"
                  type="tel"
                  placeholder="Enter Your Restaurant Phone Number"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantDescription">
                  Enter Your Restaurant Description:
                </label>
                <input
                  id="restaurantDescription"
                  type="text"
                  placeholder="Enter Your Restaurant Description"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantAddress">
                  Enter Your Restaurant Address:
                </label>
                <input
                  id="restaurantAddress"
                  type="text"
                  placeholder="Enter Your Restaurant Address"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantOpeningHours">
                  Enter Your Restaurant Opening Hours:
                </label>
                <input
                  id="restaurantOpeningHours"
                  type="time"
                  placeholder="Enter Your Restaurant Hours"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
              </div>
            </form>
            <Link to="/addrestaurantmenu">
              <button className="bg-[#FFA500] p-[15px] rounded-3xl font-[700] text-[15px] text-[#000]">
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
