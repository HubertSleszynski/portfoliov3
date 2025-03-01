import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const WorkItem = ({ href, category, img, title, tech, github }) => {
  return (
    <>
      <Link href={href}>
        <div className="relative overflow-hidden w-full h-[300px] mb-6 p-8 rounded-[30px] flex justify-center items-center bg-[#f4f4f4]">
          <Badge className="bg-primary text-base text-white absolute top-6 left-6 capitalize z-40">
            {category}
          </Badge>
          <Image
            src={img}
            alt=""
            fill
            priority
            quality={100}
            className="object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </Link>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
          <p className="max-w-[660px] text-base text-primary/60 my-2">{tech}</p>
        </div>
        <Link href={github}>
          <button className="bg-accent text-white w-[48px] h-[48px] flex justify-center items-center rounded-full ">
            <FaGithub className="text-2xl" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default WorkItem;
