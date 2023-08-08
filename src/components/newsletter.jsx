import React from "react";

const Newsletter=()=>{
    return(
        <>
        <div className="w-full bg-[#2699fb] p-4">
            <div className="max-w-[1240px] m-auto md:flex justify-between py-[50px] ">
                <div className="mt-2" >
                    <h1 className=" text-[20px] md:text-[40px] text-white font-bold">Want to learn latest I.T skills?</h1>
                    <span className="text-white">Sign up to our newsletter and stay up to date</span>
                </div>
                <div className="mt-2" >
                <input type="text" className="p-3 rounded text-slate-600" placeholder="Email"/> 
                <button className="bg-black text-white p-3 rounded mx-2 ">Get started</button>
                <br />
                <p className="text-white mt-2">We care about the protection of your data.Read our<br /><a href="/" className="text-black"> Privacy Policy</a></p>
                </div>
                

            </div>
        </div>
        </>
    )
}
export default Newsletter;