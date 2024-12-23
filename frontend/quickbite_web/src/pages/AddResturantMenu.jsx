import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterButtom from "../components/FooterButtom";
const AddResturantMenu = () => {
  return (
    <>
      <Navbar />
      <div>AddResturantMenu</div>
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

export default AddResturantMenu;
