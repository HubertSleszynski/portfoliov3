import Image from "next/image";

const Card = ({
  type,
  company,
  logoUrl,
  position,
  description,
  duration,
  institution,
  qualification,
  name,
  icon,
  icons,
  course,
}) => {
  return (
    <div className="w-full h-[300px] sm:h-[470px] flex items-center top-12 sticky overflow-hidden">
      <div className="w-full h-[270px] sm:h-[440px] border border-accent/20 bg-[#f4ffff] rounded-lg">
        <div className="flex flex-col h-full gap-12">
          <div className="w-full h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-lg rounded-tr-lg">
            <div className="flex gap-2">
              <Image
                src="assets/journey/shape.svg"
                alt=""
                width={16}
                height={16}
              />
              <h3 className="text-lg text-primary font-semibold">
                {type === "experience"
                  ? position
                  : type === "skill"
                  ? name
                  : type === "education"
                  ? qualification
                  : type === "certifications"
                  ? company
                  : duration}
              </h3>
            </div>
            <p className="text-base">
              {type !== "experience" &&
              type !== "education" &&
              type !== "certifications"
                ? null
                : duration}
            </p>
          </div>
          {type === "skill" ? (
            <div className="grid md:grid-cols-9 sm:grid-cols-3 gap-4 place-items-center">
              {icons &&
                icons.map((item, index) => (
                  <div
                    key={index}
                    className="w-max h-full xl:w-[100px] relative flex justify-center items-center text-center"
                  >
                    <div className="text-5xl text-primary/90 flex flex-col items-center justify-center">
                      {item.icon}
                      <p className="mt-2 text-sm text-primary/70">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-1 justify-center xl:justify-start items-center md:py-8 md:px-16">
              <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 justify-center xl:justify-start items-center text-center xl:text-left px-4 xl:px-0">
                {type === "skill" ? (
                  <div className="w-max h-full xl:w-[300px] relative flex justify-center items-center">
                    <div className="text-5xl text-primary/90">{icon}</div>
                  </div>
                ) : (
                  <div className="relative w-[300px] h-[38px] xl:h-[44px]">
                    {logoUrl && (
                      <Image
                        src={logoUrl}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                )}
                <div className="w-full xl:border-l xl:border-secondary/10 xl:px-12">
                  <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                    {type === "experience"
                      ? company
                      : type === "skill"
                      ? name
                      : type === "education"
                      ? institution
                      : type === "certifications"
                      ? course
                      : null}
                  </h3>
                  <p className="max-w-[660px] text-base">{description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
