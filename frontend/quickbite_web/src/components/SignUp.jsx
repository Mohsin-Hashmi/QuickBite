import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { assets } from "../assets/images/assets";
import axios from "axios";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const validationFields = () => {
    const isValid= firstName && lastName && emailId && password && role;
    setError({firstName:!firstName, lastName:!lastName, emailId:!emailId, password:!password, role:!role});
    return isValid;
  };
  const handleInputChange = (field, value) => {
    if (field === "firstName") {
      setFirstName(value);
      if (value) setError((prev) => ({ ...prev, firstName: false }));
    }
    if (field === "lastName") {
      setLastName(value);
      if (value) setError((prev) => ({ ...prev, lastName: false }));
    }
    if (field === "emailId") {
      setEmail(value);
      if (value) setError((prev) => ({ ...prev, emailId: false })); // Reset error for emailId
    }
    if (field === "password") {
      setPassword(value);
      if (value) setError((prev) => ({ ...prev, password: false })); // Reset error for password
    }
    if (field === "role") {
      setRole(value);
      if (value) setError((prev) => ({ ...prev, role: false }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validationFields()){
      try {
        const response = await axios.post(`${BASE_URL}/api/users/signup`,
          {firstName, lastName, emailId, password, role},
          {withCredentials:true}
        )
        if (response.status===200) {
          localStorage.setItem("token", response.data.token);
          navigate("/home");
        }else{
          throw new Error("Invalid credentials");
        }
      } catch (err) {
        err.Error(err.response?.data?.message || err.message);
      }
    }
    
  };

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="flex justify-center items-center gap-x-[50px]  border-2 border-[#808080] h-[590px] rounded-2xl bg-opacity-90 shadow-2xl  px-[25px] py-[45px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[1000px]">
            <div className="w-full">
              <h1 className="text-[24px] text-center text-gray-800">
                Create Your Account
              </h1>
              <p className="text-[14px] font-[500] text-center mt-[7px] text-gray-500">
                Get Your Favorite Meals Delivered Fast!
              </p>
              <form className="mt-[15px] " onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.firstName ? "placeholder-red-500 border-red-500" : ""
                  }`}
                  placeholder={
                    error.firstName ? "First name is required*" : "First Name"
                  }
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.lastName ? "placeholder-red-500 border-red-500" : ""
                  }`}
                  placeholder={
                    error.lastName ? "Last name is required*" : "Last Name"
                  }
                />
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => handleInputChange("emailId", e.target.value)}
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
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
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.password ? "placeholder-red-500 border-red-500" : ""
                  }`}
                  placeholder={
                    error.password ? "Password is required*" : "Password"
                  }
                />
                <select
                  id="options"
                  value={role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className={`font-[500] border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] ${
                    error.role ? "placeholder-red-500 border-red-500" : ""
                  }`}
                >
                  <option
                    className={`font-[500] ${
                      error.role ? 'text-red-500' : 'text-[#808080]'
                    }`}
                    value=""
                    disabled
                    
                  >
                    {error.role ? `Role is required*` : 'Select Role'}
                  </option>
                  <option className="text-[#808080] font-[500]" value="user">
                    User
                  </option>
                  <option className="text-[#808080] font-[500]" value="admin">
                    Admin
                  </option>
                </select>
                <div className="flex items-center gap-x-[5px]">
                  <input
                    type="checkbox"
                    className="relative left-0 top-1 font-[500]"
                    checked={showPassword}
                    onChange={handleShowPassword}
                  />
                  <p className="text-sm text-[#808080] mt-[8px] font-[500]">
                    show password
                  </p>
                </div>

                <button
                  type="submit"
                  onClick={validationFields}
                  className=" py-[12px] px-[130px]  bg-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[15px] font-[500] hover:bg-[#FFFFFF] hover:text-[#0E64D2] border hover:border-[#0E64D2]"
                >
                  Signup
                </button>
                <p className="text-center font-[500]">
                  Already have an account?{" "}
                  <Link
                    className="text-[#2F89FC]  hover:underline hover:underline-offset-4"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
            <div>
              <img
                className="rounded-2xl"
                src={assets.food_bg}
                alt=" bg image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
