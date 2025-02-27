import Image from "next/image";

const services = [
  {
    icon: "/assets/services/icon-1.svg",
    title: "UI UX Design",
    description: "Designing compelling engaging user experience.",
  },
  {
    icon: "/assets/services/icon-2.svg",
    title: "Web Development",
    description: "Developing robust, scalable websites for all devices.",
  },
  {
    icon: "/assets/services/icon-3.svg",
    title: "E-commerce Solutions",
    description: "Building secure, user friendly online stores to drive sales.",
  },
  {
    icon: "/assets/services/icon-4.svg",
    title: "Care & Support",
    description: "Providing updates, security and support for performace.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <ul className="relative z-40 -top-12 left-0 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center lg:place-items-stretch ">
          {services.map((item, index) => (
            <li
              className="bg-white shadow-custom max-w-[350px] md:max-w-none xl:max-w-none p-6 rounded-lg"
              key={index}
            >
              <div>
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-4"
                />
              </div>
              <h3 className="text-[20px] text-primary font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-[15px]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
