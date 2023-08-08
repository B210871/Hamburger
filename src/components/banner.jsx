import React from 'react';
import Typed from 'react-typed';

const Banner =() =>{
    return(
        <>
        <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto my-[100px] text-center'>
           <div className='text-xl md:text-4xl font-bold md:mt-4'> Learn with us </div>
            <h2 className='text-white font-bold text-3xl md:text-[80px] md:mt-4'>Grow with us</h2>
            <h3 className='text-2xl md:text-[50px] font-bold text-white md:mt-10'>Learn
            <Typed
                    className='pl-3'
                    strings={['Web Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                />
                </h3>
                 <button className="bg-black text-white p-3 rounded  mt-3 md:mt-10">Get started</button>
        </div>
        
        </div>
        </>
    )
}

export default Banner;
