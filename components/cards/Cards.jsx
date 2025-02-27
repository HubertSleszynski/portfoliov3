"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNpm,
  FaYarn,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiNextdotjs,
  SiVite,
  SiFirebase,
} from "react-icons/si";
import { BiLogoNetlify, BiLogoVisualStudio } from "react-icons/bi";

// components
import Card from "./Card";

const journey = [
  // experience
  {
    type: "experience",
    company: "Rhapsody",
    logoUrl: "/assets/journey/experience/rhapsodymedia.svg",
    position: "Junior Frontend Developer",
    duration: "Sep 2024 - Present",
    description:
      "Built websites and web apps using Next.js, Tailwind, and Typescript. Worked on Scaleble, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Inn-Tek",
    logoUrl: "/assets/journey/experience/inntek.png",
    position: "Intern",
    duration: "Mar 2023 - Mar 2024",
    description:
      "Developed full stack solutions using React and Node.js, Integrated fronted and backend Technologies.",
  },
  // skills
  {
    type: "skill",
    name: "Technologies",
    icon: <FaHtml5 />,
    icons: [
      { icon: <FaHtml5 />, label: "Html" },
      { icon: <FaCss3Alt />, label: "Css" },
      { icon: <FaSass />, label: "Sass" },
      { icon: <SiTailwindcss />, label: "Tailwind" },
      { icon: <SiStyledcomponents />, label: "Styled Components" },
      { icon: <SiJavascript />, label: "Javascript" },
      { icon: <SiTypescript />, label: "Typescript" },
      { icon: <FaReact />, label: "React" },
      { icon: <SiNextdotjs />, label: "Next" },
    ],
    duration: "",
    description: "TEST1.",
  },
  {
    type: "skill",
    name: "Tools",
    icon: <FaHtml5 />,
    icons: [
      { icon: <BiLogoVisualStudio />, label: "VS Code" },
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaGithub />, label: "Github" },
      { icon: <SiVite />, label: "Vite" },
      { icon: <FaNpm />, label: "Npm" },
      { icon: <FaYarn />, label: "Yarn" },
      { icon: <SiFirebase />, label: "Firebase" },
      { icon: <FaFigma />, label: "Figma" },
      { icon: <BiLogoNetlify />, label: "Netlify" },
    ],
    duration: "",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.",
  },
  // education
  {
    type: "education",
    institution: "University of Lomza",
    logoUrl: "/assets/journey/education/al.svg",
    qualification: "Master's degree | Computer Science",
    duration: "Mar 2025 - Jun 2026",
    description:
      "Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  {
    type: "education",
    institution: "University of Lomza",
    logoUrl: "/assets/journey/education/al.svg",
    qualification: "Bachelor degree | Computer Science",
    duration: "Oct 2020 - Feb 2024",
    description:
      "Learned full-stack development concepts,focusing on React, Node.js and APIs. Completed hands-on projects to solidify skills.",
  },
  //certifications
  {
    type: "certifications",
    company: "Shopify",
    logoUrl: "/assets/journey/certifications/shopify.svg",
    course: "Shopify Development Fundamentals",
    duration: "Feb 2025 - Feb 2027",
    description:
      "Developed full stack solutions using React and Node.js, Integrated fronted and backend Technologies.",
  },
];

const Cards = () => {
  return (
    <Tabs
      defaultValue="experience"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="max-w-max mb-[30px]">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === "experience")
              .map((item, index) => (
                <Card key={index} {...item} />
              ))}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="skills" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === "skill")
              .map((item, index) => (
                <Card key={index} {...item} />
              ))}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="education" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === "education")
              .map((item, index) => (
                <Card key={index} {...item} />
              ))}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="certifications" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter(item => item.type === "certifications")
              .map((item, index) => (
                <Card key={index} {...item} />
              ))}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
};

export default Cards;
