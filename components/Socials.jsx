import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/HubertSleszynski",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/hubert-%C5%9Bleszy%C5%84ski-74b755231/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/hubert.sleszynski",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/hrsleszynski/",
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
