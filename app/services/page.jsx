"use client";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Software Development",
    description: "Building high-quality software solutions tailored to client needs, using modern programming languages and frameworks.",
    href: "", 
  },
  {
    num: "02",
    title: "DevOps",
    description: "Automating infrastructure, improving deployment pipelines, and ensuring continuous delivery through tools like Kubernetes, Docker, and CI/CD practices.",
    href: "", 
  },
  {
    num: "03",
    title: "Web Development",
    description: "Creating responsive and dynamic websites using the latest web technologies, focusing on performance, scalability, and user experience.",
    href: "", 
  },
];



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center ">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1, 
            transition:{
              delay:2.4, 
              duration:0.4, 
              ease:"easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service,index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href} 
                    className="
                      w-[35px] h-[35px] rounded-full bg-white group-hover:bg-accent 
                      transition-all duration-500 flex justify-center items-center hover:rotate-45"                  
                  >
                    <BsArrowDownRight className="text-primary text-xl"/>
                  </Link>
                </div>
                <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" >{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full">
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
