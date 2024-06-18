import React from 'react'
import { ABOUT_TEXT } from '../constants';
import{ motion} from "framer-motion";
import aboutpic from "../assets/WhatsApp Image 2024-05-28 at 01.03.09_655b6db2.jpg"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className='my-20 text-center text-4xl'>About
        <span className="text-neutral-500"> Me</span></h1>
       
     <div className="flex flex-wrap">
    <div  
    className="w-full lg:w-1/2 lg:p-40">
    <div className="flex justify-center items-center ">
    <motion.img 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-300}}
    transition={{duratoin:1,delay:0.1}} 
    src={aboutpic} alt="Chetna Lilhare" className="w-96 h-17 rounded-full border-4 border-white shadow-lg rounded-xl border-4 border-gray-200 shadow-6xl transform hover:scale-105 transition duration-500"/>

        </div>
    </div>
    <div
     
    className="w-full lg:w-1/2">
    <div className="flex justify-center lg:justify-start">
    <motion.p
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:300}}
    transition={{duratoin:2,delay:0.5}} className="my-6 max-w-xl py-6 font-light text-xl">
  {ABOUT_TEXT}
</motion.p>
   </div>
    </div>
    </div>
    </div>
  );
};

export default About;