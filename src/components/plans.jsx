import React from "react";
import Single from "../assets/images/single.png"
import Triple from "../assets/images/triple.png"
import double from "../assets/images/double.png"

const Plan =()=>{
    return(
        <>
        <div className="py-[100px] ">
            <div className=" max-w-[1240px] mx-auto md:grid gap-6 grid-cols-3">
                <div className="shadow-xl my-4  h-[400px] hover:scale-105 duration-500"> 
                <img src={Single} alt=""  className="w-[50px] h-[50px] mx-auto"/>
                <h1 className="text-2xl font-bold text-center mt-2">Web Development</h1>
                <h2 className="text-3xl font-bold text-center mt-2">$192</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque omnis cum animi obcaecati dicta non. Doloribus nostrum quasi deleniti molestias culpa deserunt veniam. Inventore dolorum blanditiis magnam nihil id.</p>
                <button className="bg-[#00df9a]  p-3 rounded-md  mt-3 w-full mx-auto ">Start Trial</button>
                
                </div>
                <div className="shadow-xl bg-gray-200 my-4  h-[400px] hover:scale-105 duration-500"> 
                <img src={double} alt=""  className="w-[50px] h-[50px] mx-auto"/>
                <h1 className="text-2xl font-bold text-center mt-2">Digital Marketing</h1>
                <h2 className="text-3xl font-bold text-center mt-2">$192</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque omnis cum animi obcaecati dicta non. Doloribus nostrum quasi deleniti molestias culpa deserunt veniam. Inventore dolorum blanditiis magnam nihil id.</p>
            <button className="bg-black text-[#00df9a]  p-3 rounded-md  mt-3 w-full mx-auto ">Start Trial</button>
                
                </div>
                <div className="shadow-xl my-4  h-[400px] hover:scale-105 duration-500"> 
                <img src={Triple} alt=""  className="w-[50px] h-[50px] mx-auto"/>
                <h1 className="text-2xl font-bold text-center mt-2">App Development</h1>
                <h2 className="text-3xl font-bold text-center mt-2">$192</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque omnis cum animi obcaecati dicta non. Doloribus nostrum quasi deleniti molestias culpa deserunt veniam. Inventore dolorum blanditiis magnam nihil id.</p>
                <button className="bg-[#00df9a]  p-3 rounded-md  mt-3 w-full mx-auto ">Start Trial</button>
                
                </div>
               
            </div>
        </div>
        </>
    )
}
export default Plan;