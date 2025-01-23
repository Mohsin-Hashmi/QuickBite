import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Layout from "./components/Layout";
import AddRestaurant from "./pages/AddRestaurant";
import AddResturantMenu from "./pages/AddResturantMenu";
import RestaurantDetails from "./components/RestaurantDetails";
import ContactUs from "./pages/ContactUs";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes baseline="/">
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/addrestaurant"
            element={
              <ProtectedRoute>
                <AddRestaurant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addrestaurantmenu"
            element={
              <ProtectedRoute>
                <AddResturantMenu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/restaurant/:id"
            element={
              <ProtectedRoute>
                <RestaurantDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contactus"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
