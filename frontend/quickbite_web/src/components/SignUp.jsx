import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <div className="w-[390px] m-auto px-[39px] py-[45px] border border-[#808080]">
            <h1 className="text-[24px] text-center">Create an account</h1>
            <p className="text-[14px] font-[700] text-center mt-[7px]">
              Connect with your friends today!
            </p>
            <from className="mt-[36px] block">
              <input
                type="text"
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] "
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] "
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] "
                placeholder="Email Id"
                required
              />
              <input
                type="password"
                className="border border-[#808080] block w-full py-[12px] px-[11px] text-[16px] outline-none rounded-[10px] mt-[28px] "
                placeholder="Password"
                required
              />
              <button className="w-full py-[12px] px-[123px] bg-[#0E64D2] text-[#FFFFFF] mt-[29px] mb-[32px] rounded-[5px] text-[16px] font-[500]">
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link className="text-[#2F89FC]" to="/login">
                  Login
                </Link>
              </p>
            </from>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
