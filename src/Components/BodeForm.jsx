import React from "react";
import BilinearParam from "./BilinearParam";
import BodeParam from "./bodeParam";
const BodeForm = () => {
  const [ViewBilinear,setViewBilinear] = React.useState("");

  const handleSelect = (e) => {
    e.preventDefault();
   const value=e.target.value;
   if(value === "bilinear") {
     setViewBilinear("bilinear");
   }
   else if (value === "") {
     setViewBilinear("");
   }
  }

  return (
    <div className={`w-[300px] absolute left-24 top-24  rounded-md bg-white ${ViewBilinear ===""? 'h-[150px]':'h-[250px]'}`}>
      <form className="flex items-start flex-col gap-4 p-4">
        <select onChange={handleSelect} className="p-1 text-[12px] rounded-md border border-gray-900 w-full">
          <option value="">Filter Order</option>
          <option value="bilinear">Bilinear</option>
          <option value="biquad">Biquad</option>
          <option value="higher">Higher</option>
        </select>
       {
        ViewBilinear === "bilinear" && <BilinearParam />
       }
       {
        ViewBilinear === "" && <BodeParam />
       }
      </form>
    </div>
  );
}

export default BodeForm;
