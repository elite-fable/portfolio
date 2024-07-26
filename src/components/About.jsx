/* import React from 'react'
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
    transition={{duration:0.3,delay:0}} 
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

export default About; */
import React from 'react';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import aboutpic from '../assets/WhatsApp Image 2024-05-28 at 01.03.09_655b6db2.jpg';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className='my-20 text-center text-4xl'>About
        <span className="text-neutral-500"> Me</span>
      </h1>
       
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-40">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
           className="flex justify-center items-center">
            <img 
              /* whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} */
              src={aboutpic} 
              alt="Chetna Lilhare" 
              className="w-120 h-100 rounded-full border-4 border-black shadow-lg transform hover:scale-105 transition duration-500"
             /*  style={{
                boxShadow: "0 0 20px rgba(25, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.7), 0 0 60px rgba(255, 255, 255, 0.7)",
                transition: "box-shadow 0.3s ease-in-out"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 1), 0 0 50px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 1), 0 0 70px rgba(255, 255, 255, 1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0,255,147, 0.7), 0 0 40px rgba(0,105,180, 0.7), 0 0 50px rgba(0, 255, 255, 0.7), 0 0 60px rgba(0, 230, 255, 0.7)";
              }} */
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 300 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }} 
              className="my-6 max-w-xl py-6 font-light text-xl"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

