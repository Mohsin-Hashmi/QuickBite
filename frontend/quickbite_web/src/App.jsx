import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
