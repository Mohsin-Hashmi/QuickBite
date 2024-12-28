import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { assets } from "../assets/images/assets";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL + "/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, emailId, password, role }),
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid Credentials");
      }
      const user = await response.json();
      localStorage.setItem("token", user.token);

      // Navigate to profile page
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="flex justify-center items-center gap-x-[50px]    border-2 border-[#808080] h-[590px] rounded-2xl bg-opacity-90 shadow-2xl  px-[25px] py-[45px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[1000px]">
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
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] font-[500]"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] font-[500]"
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] font-[500]"
                  placeholder="Email Id"
                  required
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] font-[500]"
                  placeholder="Password"
                  required
                />
                <select
                  id="options"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[10px] text-sm text-[#808080]  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-[500] font-[500]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option className="text-[#808080]" value="user">
                    User
                  </option>
                  <option className="text-[#808080]" value="admin">
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
                  className=" py-[12px] px-[130px]  bg-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[15px] font-[500] hover:bg-[#FFFFFF] hover:text-[#0E64D2] border hover:border-[#0E64D2]"
                >
                  Signup
                </button>
                <p className="text-center font-[500]">
                  Already have an account?{" "}
                  <Link className="text-[#2F89FC]  hover:underline hover:underline-offset-4" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
            <div>
              <img className="rounded-2xl" src={assets.food_bg} alt=" bg image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
