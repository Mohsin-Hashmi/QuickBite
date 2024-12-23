import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AddRestaurant from "./pages/AddRestaurant";
import AddResturantMenu from "./pages/AddResturantMenu";
import RestaurantDetails from "./components/RestaurantDetails";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/home" element={<Layout><Home/></Layout>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addrestaurant" element= {<AddRestaurant/>}/>
        <Route path="/addrestaurantmenu" element= {<AddResturantMenu/>}/>
        <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
