
const Banner = () => {
  return (
    <>
      <section className=" banner relative ">
        <div className="container">
          <div className="wrapper flex justify-between items-center pt-[120px]">
            <div className="w-[600px]">
              <p className="text-[#FFFBF2] text-lg font-[700]">
                Order Restaurant food, takeaway and groceries.
              </p>
              <h1 className="text-[54px] font-[700] text-[#FFFFFF]">Feast Your Senses, <span className="text-[#000000]">Fast and Fresh.</span></h1>
            </div>
            <div>
              {/* <img src={bannerImage} alt="food banner image " /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
