import React from "react";
import laptop from "../assets/images/laptop.jpg"
const Expert =()=>{
    return(
        <>
        <div className="max-w-[1240px] mx-auto  md:grid grid-cols-2">
            <div className=" w-[80%] col-span-1">
                <img src={laptop} alt="" />
            </div>
            <div className="flex flex-col justify-center col-span-1">
                <h1 className="text-[#00df9a] font-bold m-2">LEARN FROM EXPERTS</h1>
                <p className="m-2 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est temporibus ipsum modi!</p>
            <button className="bg-black md:w-[30%] w-[50%] m-auto text-white p-3 my-2 rounded">Get started</button>
            </div>
        </div>
        </>
    )
}

export default Expert;