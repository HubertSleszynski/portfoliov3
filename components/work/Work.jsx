import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//components
import AnimatedText from "../AnimatedText";
import WorkItem from "./Workitem";

const data = [
  {
    href: "https://hrs-wfood2024.netlify.app/",
    github: "https://github.com/HubertSleszynski/restaurant-website",
    category: "frontend",
    img: "/assets/work/hrs-wfood.png",
    title: "W'Food",
    tech: "Next.js | TailwindCSS",
  },
  {
    href: "https://hrs-fitphysique.netlify.app/",
    github: "https://github.com/HubertSleszynski/fit-physique",
    category: "frontend",
    img: "/assets/work/hrs-fitphysique.png",
    title: "FitPhysique",
    tech: "Typescript | Next.js | TailwindCSS",
  },
  {
    href: "https://hrs-serene.netlify.app/",
    github: "https://github.com/HubertSleszynski/serene",
    category: "frontend",
    img: "/assets/work/hrs-serene.png",
    title: "Serene",
    tech: "Next.js | TailwindCSS",
  },
  {
    href: "https://hrs-zenbrew.netlify.app/",
    github: "https://github.com/HubertSleszynski/zenbrew",
    category: "frontend",
    img: "/assets/work/hrs-zenbrew.png",
    title: "Zenbrew",
    tech: "Next.js | TailwindCSS | GSAP",
  },
  {
    href: "https://hrs-furry-trimz.netlify.app/",
    github: "https://github.com/HubertSleszynski/furry-trimz",
    category: "frontend",
    img: "/assets/work/hrs-furry-trimz.png",
    title: "Furry Trimz",
    tech: "React | TailwindCSS",
  },
  {
    href: "https://hrs-dancing-knight.netlify.app/",
    github: "https://github.com/HubertSleszynski/Dancing-Knight",
    category: "logic",
    img: "/assets/work/hrs-dancing-knight.png",
    title: "Dancing Knight",
    tech: "React | SCSS",
  },
  {
    href: "https://hrs-yola.netlify.app/",
    github: "https://github.com/HubertSleszynski/yoga-website",
    category: "frontend",
    img: "/assets/work/hrs-yola.png",
    title: "Yola",
    tech: "React | TailwindCSS",
  },
  {
    href: "https://hrs-gymme.netlify.app/",
    github: "https://github.com/HubertSleszynski/gymME",
    category: "design",
    img: "/assets/work/hrs-gymme.png",
    title: "gymME",
    tech: "React | TailwindCSS",
  },
  {
    href: "https://hubertsleszynski.github.io/four-logical-games/",
    github: "https://github.com/HubertSleszynski/four-logical-games",
    category: "logic",
    img: "/assets/work/hrs-four-logical-games.png",
    title: "Logical games",
    tech: "HTML | CSS | Javascript",
  },
];

const Work = () => {
  const [tabValue, setTabValue] = useState("all");
  const [visableItems, setVisableItems] = useState(6);

  const uniqueCategories = Array.from(new Set(data.map(item => item.category)));

  const tabData = [
    { category: "all" },
    ...uniqueCategories.map(item => ({ category: item })),
  ];

  const filiteredWork =
    tabValue === "all"
      ? data.filter(item => item.category !== "all")
      : data.filter(item => item.category === tabValue);

  const loadMoreItems = () => setVisableItems(prev => prev + 3);

  return (
    <section className="py-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyle="h2 mb-[30px] xl:mb-0"
            />
            <TabsList className="max-w-max h-full mb-[30px] ">
              {tabData.map((item, index) => (
                <TabsTrigger
                  key={index}
                  value={item.category}
                  className="capitalize w-[120px]"
                  onClick={() => setTabValue(item.category)}
                >
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filiteredWork.slice(0, visableItems).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {visableItems < filiteredWork.length && (
              <div className="flex justify-center mt-12">
                <button onClick={loadMoreItems} className="btn btn-accent">
                  Load More
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
