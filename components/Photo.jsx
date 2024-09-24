"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/assets/photo.png"

const Photo = () =>{
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition:{delay:2, duration:0.4, ease:"easeIn"},
        }}
      >
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{delay:2.4, duration:0.4, ease:"easeInOut"},
          }} className="w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute"
        >
          <Image src={img}  alt="" priority quality={100} fill className="object-contain rounded-full"/>

     
        </motion.div>

        <motion.svg
          className="w-[256px] xl:w-[456px] h-[256px] xl:h-[456px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            stroke="#00ff99" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
              strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120,360]
            }}
            transition={{
              duration:20,
              repeat: Infinity,
              repeatType: "reverse"
            }}  
          > 

          </motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo; 