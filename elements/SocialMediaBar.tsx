import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export default function SocialMediaBar() {
  return (
    <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
      <a
        href=" https://github.com/ChervonnyyAnton"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="w-8 h-8 cursor-pointer" />
      </a>
      <a
        href="https://www.linkedin.com/in/chervonnyy/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
      </a>
      <a
        href="https://www.youtube.com/@Pro100proQA"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillYoutube className="w-8 h-8 cursor-pointer" />
      </a>
    </div>
  );
}
