import { ISocial } from "@/type";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const SocialMediaButton: React.FC<{ social: ISocial }> = ({
  social: { name, link },
}) => {
  const className = "w-8 h-8 cursor-pointer";

  return (
    <a href={link} target="_blank" rel="noreferrer">
      {name === "Github" && <AiFillGithub className={className} />}
      {name === "Linkedin" && <AiFillLinkedin className={className} />}
      {name === "Youtube" && <AiFillYoutube className={className} />}
    </a>
  );
};

export default SocialMediaButton;
