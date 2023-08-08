import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Header = () => {

    const [toggle, setToggle] = useState();
    return (
        <>
       
        <div className="bg-[#2699fb] p-4">
            <div className="max-w-[1240px] flex  items-center py-[20px] justify-between  mx-auto">

                <div className="text-3xl font-bold">Wscube Tech</div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-xl md:hidden block" />
                        :
                        <AiOutlineMenu onClick={()=> setToggle(!toggle)} className="text-white text-xl md:hidden block" />

                }


                <ul className="hidden md:flex text-white gap-10" >
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>


                {/* responsive */}



                <ul className={`duration-300 md:hidden fixed  top-[108px] w-full h-screen bg-black text-white gap-10
                ${toggle ? 'left-[0]' : 'left-[-100%]'}
                
                
                `}>
                    <li className="py-5 text-center">Home</li>
                    <li className="py-5  text-center">Company</li>
                    <li className="py-5 text-center">Resources</li>
                    <li className="py-5 text-center" >About</li>
                    <li className="py-5 text-center">Contact</li>
                </ul>


            </div>
        </div>
        </>
    )
}
export default Header;