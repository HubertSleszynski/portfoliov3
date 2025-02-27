"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import RotatingShape from "./RotatingShape";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-ful xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            I am a skilled frontend developer, dedicated to crafting seamless
            digital experiences.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact me</button>
          </ScrollLink>
          <div>stats</div>
          {/* image */}
        </div>
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] left-[6.5vw] bottom-0 z-40">
            <Image
              src="/assets/hero/dev.png"
              alt="developer picture"
              fill
              priority
              quality={100}
              className="object-contain"
            />
          </div>
          <div
            className="hidden xl:flex absolute left-[4vw] top-48"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              alt=""
              width={160}
              height={160}
            />
          </div>
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-1.svg"
                  alt=""
                  width={38}
                  height={38}
                />
              }
              direction="left"
              duration={6}
            />
          </div>
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-2.svg"
                  alt=""
                  width={34}
                  height={34}
                />
              }
              direction="right"
              duration={5}
            />
          </div>
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  alt=""
                  width={36}
                  height={36}
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
