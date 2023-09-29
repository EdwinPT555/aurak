import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-around py-4">
      <div className="text-xl font-bold">
        <img
          src={"https://www.aurak.ac.ae/assets/images/logo.png?v=2.1.47"}
          alt="logo"
          className="h-16 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="space-x-4 flex">
        <span className="text-2xl flex text-gray-700 items-center mr-8">
          <BsGlobe />
          <select name="country" id="country" className="border-none text-lg">
            <option value="IND">Ind</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="SA">SA</option>
            <option value="SL">SL</option>
          </select>
        </span>
        <button className="px-2 py-1 rounded-lg flex items-center gap-2 text-gray-800 font-semibold">
          <FaRegUser />
          Student Portal
        </button>
        <button className="px-2 py-1 rounded-lg flex items-center gap-2 text-gray-800 font-semibold">
          <FaRegUser />
          Faculty Portal
        </button>
      </div>
      <div className="space-x-4">
        <button className="bg-red-700 text-white px-4 py-2 rounded-full font-semibold">
          Enquire now
        </button>
        <button className="bg-red-700 text-white px-4 py-2 rounded-full font-semibold">
          Apply now
        </button>
      </div>
    </div>
  );
};


export default TopNavBar;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   padding: 1rem;
// `;