import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex justify-center items-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative  w-full max-w-[380px]">
              <div className="w-[160px] h-[160px] absolute bg-accent -top-5 -left-5 -z-10"></div>
              <div className="bg-[#e5f8f6] rounded-tl-[8px] rounded-tr-[120px] w-full m-h-[480px] flex justify-center items-end">
                <Image
                  src="/assets/about/img.png"
                  alt=""
                  width={350}
                  height={478}
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute top-2/4 -right-[65px] flex justify-center items-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    alt=""
                    width={160}
                    height={160}
                  />
                </motion.div>
                <div className="absolute text-white text-center">
                  <div className="text-5xl font-bold leading-none">2+</div>
                  <div className="text-center leading-none">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText text="My name is Hubert" textStyle="h2 mb-2" />
              <p className="text-lg">Frontend Developer & Designer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I create visually stunning and functional websites using modern
              frontend technologies and design principles. With a focus on
              user-centric design, I ensure every project is not only
              aesthetically pleasing but also intuitive and easy to navigate.
              Explore my work to see how I combine creativity with technical
              skills to deliver exceptional digital experiences that engage
              users and drive results.
            </p>
            <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap items-center max-w-max mx-auto xl:mx-0">
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Age</div>
                <p>25 Years</p>
              </div>
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Live In</div>
                <p>Białystok, Poland</p>
              </div>
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>882 771 289</p>
              </div>
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>h.r.sleszynski@gmail.com</p>
              </div>
              <Link
                href="https://github.com/HubertSleszynski"
                className="max-w-max"
                target="_blank"
              >
                <div className="uppercase font-bold text-primary">Github</div>
                <p className="underline hover:text-accent cursor-pointer">
                  HubertSleszynski
                </p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/hubert-%C5%9Bleszy%C5%84ski-74b755231/"
                className="max-w-max"
                target="_blank"
              >
                <div className="uppercase font-bold text-primary ">
                  Linkedin
                </div>
                <p className="underline hover:text-accent cursor-pointer">
                  Hubert Śleszyński
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
