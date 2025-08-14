import React from "react";
import { Button } from "../Components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PlotsEx from "../Components/PlotsEx";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min:h-screen bg-gray-900 flex items-center  flex-col gap-10 text-center bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#e2ebf0] relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 bottom-[-100px] right-[-100px]"></div>
      <Header />
      <div className=" md:px-24  px-12 w-full flex items-center  flex-col gap-3">
        <h1 className="md:text-5xl text-3xl font-semibold text-gray-800">
          Revision Bode Plotter
        </h1>
        <p className="text-gray-600">
          Helps you visualize Bode plots easily—just enter the coefficients and
          click a button!
        </p>
         <Button className="md:hidden block cursor-pointer" onClick={() => navigate("/home")}>
        Get Started
      </Button>
      </div>
      <PlotsEx />
      <Button className="md:block hidden cursor-pointer" onClick={() => navigate("/plot")}>
        Get Started
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
