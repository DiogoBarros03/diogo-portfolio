import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DiogoBarros03" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/diogo-barros-a105371b6/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank" 
            rel="noopener noreferrer" 
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
