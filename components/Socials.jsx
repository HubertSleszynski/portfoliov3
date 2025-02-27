import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/HubertSleszynski",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/hubert-%C5%9Bleszy%C5%84ski-74b755231/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={iconStyles}
            target="_blank"
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
