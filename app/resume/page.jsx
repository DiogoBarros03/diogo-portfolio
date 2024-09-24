"use client";

import {FaReact, FaNodeJs, FaJs, FaPython, FaAws, FaGithub, FaGit, FaSlack, FaDharmachakra } from "react-icons/fa"

import { SiMacos,SiWindows10,SiLinux   } from "react-icons/si";

// about me
const about={
  title: "About me",
  description: "Algo",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Diogo Barros"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+351) 932 213 668"
    },
    {
      fieldName: "Experience",
      fieldValue: "4 Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Portuguese"
    },
   
    {
      fieldName: "Languages",
      fieldValue: "English, Portuguese"
    },
    {
      fieldName: "Email",
      fieldValue: "diogo.ma.barros03@gmail.com"
    },

  ]
}

// professional experience
const experience = {
  icon: "",
  title: "My experience",
  description: "Algo",
  items:[
    {
      company: "BeAgile",
      position:"DevOps Engineer",
      duration: "2023 - Present"
    },
    {
      company: "BYSAT II",
      position:"Software Developer / Junior DevOps Engineer",
      duration: "2022 - 2023"
    },
    {
      company: "STCE",
      position:"Full Stack Developer",
      duration: "2021 - 2022"
    },
    {
      company: "VBSS - Internship",
      position:"Full Stack Developer Intern",
      duration: "Autumn 2020"
    },
    {
      company: "Knowledgebiz - Intership",
      position:"Back-End Developer Intern",
      duration: "Spring 2020"
    },
  ]
}

//education
const education = {
  icon: "",
  title: "My experience",
  description: "Algo",
  items:[
    {
      institution: "Amazon Web Services",
      degree:"AWS Certified Cloud Practitioner",
      duration: "Ongoing..."
    },
    {
      institution: "Udemy",
      degree:"The Complete Node.js Developer Course (3rd Edition)",
      duration: "2023"
    },
    {
      institution: "Udemy",
      degree:"Modern React With Redux [2023 Update]",
      duration: "2023"
    },
    {
      institution: "Bento Jesus Caraça",
      degree:"Management and Programming of Computer Systems",
      duration: "2018 - 2021"
    },

  ]
}

//skills
const skills = {
  title: "My Skills",
  description: "Technologies and tools I have mastered and use regularly.",
  skillList: [
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDharmachakra />,
      name: "Kubernetes",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaSlack />,
      name: "Slack",
    },
   
    {
      icon: <SiMacos />,
      name: "macOS",
    },
    {
      icon: <SiWindows10 />,
      name: "Windows",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area"
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/* <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p> */}
                
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[68px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p> */}
                
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[68px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p> */}
                  
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] md:gap-[20px] sm:gap-[10px] gap-[10px]">
                    {skills.skillList.map((skill, index) => {
                      return( 
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px]  bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p> */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-base">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};


export default Resume
