import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";


const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/94194066?v=4"
        alt="user_avatar"
        className="w-32 h-32 mx-auto border rounded-full"
        width={128}
        height={128}
      />
      <h3 className="my-4 font-medium tracking-wider text-3x1 font-kaushan">
        <span className="text-green">Chervonnyy </span>
        Anton
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full font-kaushan">
        QA Engineer / SDET
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full font-kaushan"
        href=""
        download={""}
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.linkedin.com/in/chervonnyy/" target="_blank" rel="noreferrer">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/ChervonnyyAnton" target="_blank" rel="noreferrer">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@Pro100proQA" target="_blank" rel="noreferrer">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 font-kaushan">
          Toggle Theme
        </button>
    </div>
  );
};

export default Sidebar;