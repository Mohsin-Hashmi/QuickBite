import { Link } from "react-router-dom";
const FooterButtom = () => {
  return (
    <>
      <div className="pt-[29px] pb-[21px] flex justify-between items-center">
        <span>
          <h3 className="text-[#fff] text-[15px] font-[500]">
            Tomato Copyright 2024, All Rights Reserved.
          </h3>
        </span>
        <div className="flex items-center gap-x-[20px] justify-between">
          <Link className="text-[#fff] font-[500] hover:text-[#FC8A06]">Privacy Policy </Link>
          <Link className="text-[#fff] font-[500] hover:text-[#FC8A06]">Terms </Link>
          <Link className="text-[#fff] font-[500] hover:text-[#FC8A06]"> Pricing </Link>
          <Link className="text-[#fff] font-[500] hover:text-[#FC8A06]">Do not sell or share my personal information</Link>
        </div>
      </div>
    </>
  );
};

export default FooterButtom;
