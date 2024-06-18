import React from 'react';
import reactDom from 'react-dom';
import {motion} from "framer-motion";
import { HERO_CONTENT } from '../constants';
 const container=(delay)=>({
  hidden:{x:-200,opacity:0},
  visible:{
    x:0,
   opacity:1,
   transition:{duration:0.7,delay:delay},
  }
}); 
import profilepic from "../assets/WhatsApp Image 2024-05-26 at 17.19.25_db8c4763.jpg"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
     <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
    <div className="flex flex-col items-center lg:items-start">
<motion.h1 
 variants={container(0)}
 whileInView={{opacity:1,x:0}}
initial="hidden"
//animate="visible" 
className="pb-8 text-6xl font-Cormorant font-thin tracking-tight lg:mt-16 lg:text-8xl">Chetna Lilhare</motion.h1>
<motion.span
 variants={container(0.1)}
initial="hidden"
whileInView={{opacity:1,x:0}}
//animate="visible" 
className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer || Machine Learning Enthusiast  ||   Competitive Programmer</motion.span>
<motion.p 
variants={container(0.2)}
initial="hidden"
whileInView={{opacity:1,x:0}}
//animate="visible" 
className="my-2 max-w-xl text-xl py-6 font-light tracking-tighter">
  {HERO_CONTENT}
</motion.p>
        </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex justify-center">
        <motion.img 
         initial={{x:300,opacity:0}}
         whileInView={{opacity:1,x:0}}
         //animate={{x:0,opacity:100}}
        transition={{duration:0.7,delay:0.1}} 
        src={profilepic} alt="Chetna Lilhare" className="w-90 h-120  rounded-full border-4 border-white shadow-lg"/>
      </div>
    </div>
   </div>
    </div>
  );
};

export default Hero;