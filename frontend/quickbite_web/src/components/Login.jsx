import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { assets } from "../assets/images/assets";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validationFields = () => {
    const isValid = emailId && password;
    setError({ emailId: !emailId, password: !password });
    return isValid;
  };
  const handleInputChange = (field, value) => {
    if (field === "emailId") {
      setEmail(value);
      if (value) setError((prev) => ({ ...prev, emailId: false })); // Reset error for emailId
    }
    if (field === "password") {
      setPassword(value);
      if (value) setError((prev) => ({ ...prev, password: false })); // Reset error for password
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validationFields()) {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/users/login`,
          { emailId, password },
          { withCredentials: true }
        );
        if (response.status === 200) {
           dispatch(addUser(response.user))
          navigate("/home");
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (err) {
        err.Error(err.response?.data?.message || err.message);
      }
    }
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="flex justify-center items-center gap-x-[50px] border-2 border-[#808080]  rounded-2xl bg-opacity-90 shadow-2xl  px-[39px] py-[45px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[1000px] ">
            <div className=" ">
              <h1 className="text-[24px] text-center">Login to your Account</h1>
              <p className="text-[14px] font-[700] text-center mt-[7px]">
                Connect with your friends today!
              </p>
              <form className="mt-[36px] block" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => handleInputChange("emailId", e.target.value)}
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.emailId ? "placeholder-red-500 border-red-500" : ""
                  }`}
                  placeholder={
                    error.emailId ? "Email is required*" : "Email Id"
                  }
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.password ? "placeholder-red-500 border-red-500" : ""
                  }`}
                  placeholder={
                    error.password ? "Password is required*" : "Password"
                  }
                />
                <div className="flex items-center gap-x-[5px]">
                  <input
                    type="checkbox"
                    className="relative left-0 top-1"
                    checked={showPassword}
                    onChange={handleShowPassword}
                  />
                  <p className="text-sm text-[#808080] mt-[8px] font-[500]">
                    show password
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full py-[12px] px-[123px] bg-[#0E64D2] hover:bg-[#FFFFFF] hover:text-[#0E64D2] border hover:border-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[16px] font-[500]"
                >
                  Login
                </button>
                <p className="text-center font-[500]">
                  Create an account?{" "}
                  <Link
                    className="text-[#2F89FC] font-[500] hover:underline hover:underline-offset-4"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
            <div>
              <img
                className="rounded-2xl"
                src={assets.food_bg}
                alt="background image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
