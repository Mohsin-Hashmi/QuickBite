import Navbar from "./Navbar";
import Footer from "./Footer";
const AddRestaurant = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="">
          <h1 className="text-center text-[40px] mt-[30px]">
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
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Email:
                </label>
                <input
                  id="restaurantName"
                  type="email"
                  placeholder="Enter Your Restaurant Email"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Phone Number:
                </label>
                <input
                  id="restaurantName"
                  type="tel"
                  placeholder="Enter Your Restaurant Phone Number"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Description:
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  placeholder="Enter Your Restaurant Description"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Address:
                </label>
                <input
                  id="restaurantName"
                  type="text"
                  placeholder="Enter Your Restaurant Address"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <label className="mb-[10px]" htmlFor="restaurantName">
                  Enter Your Restaurant Opening Hours:
                </label>
                <input
                  id="restaurantName"
                  type="time"
                  placeholder="Enter Your Restaurant Hours"
                  className="w-full border  border-[#000000] p-[10px] outline-none rounded-xl mb-[15px]"
                />
                <button className="bg-[#FFA500] p-[15px] text-[#fff] rounded-3xl font-[700]">Enter Your Restaurant Menu</button>
                <button className="bg-[#FFA500] p-[15px] text-[#fff] rounded-3xl font-[700] block">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AddRestaurant;
