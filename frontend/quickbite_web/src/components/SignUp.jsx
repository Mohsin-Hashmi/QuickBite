import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword]= useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();


  const handleShowPassword= ()=>{
    setShowPassword((prev)=>!prev)
  }

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
      <section className="signup bg-Image">
        <div className="container">
          <div className="w-[390px] m-auto px-[39px] py-[45px] border border-[#808080] rounded-2xl bg-opacity-90 shadow-2xl">
            <h1 className="text-[24px] text-center text-gray-800">
              Create an account
            </h1>
            <p className="text-[14px] font-[700] text-center mt-[7px] text-gray-500">
            Get Your Favorite Meals Delivered Fast!
            </p>
            <form className="mt-[36px] block" onSubmit={handleSubmit}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500 "
                placeholder="First Name"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Id"
                required
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
              <select
                id="options"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] text-sm text-[#808080]  focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              <input type="checkbox" checked={showPassword} onChange={handleShowPassword}/>
              <button
                type="submit"
                className="w-full py-[12px] px-[123px] bg-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[16px] font-[500]"
              >
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-[#2F89FC]" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
