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
} from "react-icons/si";
import {
  BiLogoNetlify,
  BiLogoVisualStudio,
  BiLogoFirebase,
} from "react-icons/bi";

import Card from "./Card";

const journey = [
  {
    type: "experience",
    company: "Rhapsody",
    logoUrl: "/assets/journey/experience/rhapsodymedia.svg",
    position: "Junior Frontend Developer",
    duration: "Sep 2024 - Present",
    description:
      "I was working with the Ceros SDK, as well as developing eCommerce solutions on the Shopify platform. Additionally, I created dynamic and responsive websites using React and Next.js, ensuring high performance and seamless user experiences.",
  },
  {
    type: "experience",
    company: "Inn-Tek",
    logoUrl: "/assets/journey/experience/inntek.png",
    position: "Intern",
    duration: "Mar 2023 - Mar 2024",
    description:
      "I was responsible for developing web applications, maintaining and optimizing existing projects, and creating APIs. My role also involved building and testing modules, as well as performing thorough software testing to ensure high-quality performance.",
  },
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
      { icon: <BiLogoFirebase />, label: "Firebase" },
      { icon: <FaFigma />, label: "Figma" },
      { icon: <BiLogoNetlify />, label: "Netlify" },
    ],
    duration: "",
    description:
      "Crafted structured web content using HTML effectively for modern websites, ensuring semanting markup and accessibility.",
  },
  {
    type: "education",
    institution: "University of Lomza",
    logoUrl: "/assets/journey/education/al.svg",
    qualification: "Master's degree",
    duration: "Mar 2025 - Jun 2026",
    description:
      "I pursued a Master's degree in Computer Science, focusing on advanced topics such as system architecture, data analysis, and machine learning. This allowed me to enhance my skills in designing complex systems and analyzing large datasets.",
  },
  {
    type: "education",
    institution: "University of Lomza",
    logoUrl: "/assets/journey/education/al.svg",
    qualification: "Bachelor's degree",
    duration: "Oct 2020 - Feb 2024",
    description:
      "I completed my Bachelor's degree in Computer Science, where I developed a strong foundation in programming, algorithms, and software development. During this time, I gained hands-on experience in various technologies and problem-solving techniques.",
  },
  {
    type: "certifications",
    company: "Shopify",
    logoUrl: "/assets/journey/certifications/shopify.svg",
    course: "Shopify Development Fundamentals",
    duration: "Feb 2025 - Feb 2027",
    description:
      "I obtained the Shopify Development Fundamentals certification, which provided me with a solid understanding of building and customizing eCommerce stores on the Shopify platform. This certification enhanced my skills in developing themes, integrating apps, and optimizing the Shopify user experience.",
  },
  {
    type: "certifications",
    company: "British Council",
    logoUrl: "/assets/journey/certifications/british-council.svg",
    course: "EnglishScore",
    duration: "Mar 2024",
    description:
      "I earned an English language certification that significantly enhanced my ability to communicate effectively in both written and spoken forms. This achievement has increased my confidence in using English in professional and everyday settings.",
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
