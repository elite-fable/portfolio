import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import {FaCss3Alt} from "react-icons/fa6";
import {RiTailwindCssFill} from "react-icons/ri";
import {BiLogoMongodb} from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaNode} from "react-icons/fa6";
import {FaJava} from "react-icons/fa6";
import {FaGitAlt} from "react-icons/fa";
import {FaGithubAlt} from "react-icons/fa";
import {motion} from "framer-motion";
const icon=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      //ease:"Linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
}); 
const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} 
        className="my-20 text-center text-4xl">Tech</motion.h2>
        <motion.div 
         whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={icon(2.5)}
            initial="initial"
            animate="animate "
             className="rounded-xl border-4 border-neutral-800 p-1">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={icon(3)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <FaCss3Alt className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
             variants={icon(6)}
             initial="initial"
             animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <RiTailwindCssFill className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div  
             variants={icon(2)}
             initial="initial"
             animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <SiExpress className="text-7xl text-black-900"/>
            </motion.div>
            <motion.div 
            variants={icon(2.5)}
             initial="initial"
             animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <GrMysql className="text-7xl text-blue-400"/>
            </motion.div>

            <motion.div 
            variants={icon(5)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <FaNode className="text-7xl text-black-400"/>
            </motion.div>
            <motion.div 
           variants={icon(6)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <FaJava className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div 
           variants={icon(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <BiLogoMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div 
           variants={icon(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <FaGitAlt className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div 
           variants={icon(6)}
            initial="initial"
            animate="animate" 
            className="rounded-xl border-4 border-neutral-800 p-1">
          <FaGithubAlt className="text-7xl text-gray-700"/>
            </motion.div>
           
        </motion.div>
    </div>
  );
};

export default Tech;