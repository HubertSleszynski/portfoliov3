import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div className="flex gap-6">
            <Logo light={true} />
            <Socials
              containerStyles="flex gap-2 items-center"
              iconStyles="text-white text-[24px] w-[32px] h-[32px] flex justify-center items-center rounded-full "
            />
          </div>
          <div className="text-white/70 font-light">
            Copyright &copy; 2025. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
