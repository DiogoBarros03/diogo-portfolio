"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img_1 from "@/assets/work/aws_infra.png"
import img_2 from "@/assets/work/cloud_native_app.png"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    num: "01",
    category: "infrastructure",
    title: "AWS Infrastructure Setup with Terraform",
    description:
      "Provisioned and managed AWS infrastructure using Terraform, including EKS clusters, IAM roles, security groups, and VPC configuration.",
    stack: [
      { name: "Terraform" },
      { name: "AWS" },
      { name: "EKS" },
      { name: "ECR" },
      { name: "IAM" },
      { name: "CI/CD" },
    ],
    image: img_1,
    live: "",
    github: "https://github.com/DiogoBarros03/aws_infra_setup",
  },
  {
    num: "02",
    category: "kubernetes",
    title: "Kubernetes Python App Deployment",
    description:
      "Deployed a Python app in Kubernetes for monitoring CPU and memory usage. Created Kubernetes manifests for service and deployment, and used GitHub Actions for CI/CD.",
    stack: [
      { name: "Kubernetes" },
      { name: "Python" },
      { name: "CI/CD" },
      { name: "Docker" },
    ],
    image: img_2,
    live: "",
    github: "https://github.com/DiogoBarros03/cloud-native-monotoring-app",
  }
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiper, setSwiper] = useState(null); 
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    
    setProject(projects[currentIndex]);
  };
  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20" ></div>
              
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] any -12"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => setSwiper(swiper)}  // Capture a instância do swiper
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {swiper && (
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  swiper={swiper}  
                />
              )}
            </Swiper>

          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default Work
