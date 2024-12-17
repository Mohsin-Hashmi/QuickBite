import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
const Login = () => {
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL + "/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailId, password }),
        credentials: "include",
      })
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid Credentials");
      }
      const user = await response.json();
      localStorage.setItem("token", user.token);

      // Navigate to profile page
      navigate("/home");
    } catch (err) {
      console.log(err)
    }

  }


  return (
    <>
      <section className="login bg-Image">
        <div className="container">
          <div className="w-[390px] m-auto px-[39px] py-[45px] border border-[#808080]">
            <h1 className="text-[24px] text-center">Create an account</h1>
            <p className="text-[14px] font-[700] text-center mt-[7px]">
              Connect with your friends today!
            </p>
            <form className="mt-[36px] block" onSubmit={handleSubmit}>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] "
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] "
                placeholder="Password"
                required
              />
              <button
                type="submit"
                className="w-full py-[12px] px-[123px] bg-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[16px] font-[500]"
              >
                Login
              </button>
              <p className="text-center">
                Create an account?{" "}
                <Link className="text-[#2F89FC]" to="/signup">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
