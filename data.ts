import { AiFillApi, AiFillDatabase } from "react-icons/ai";
import { SiCsharp, SiFrontendmentor } from "react-icons/si";
import { MdDeveloperMode, MdOutlineDeveloperBoard } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { DiJava } from "react-icons/di";
import { IProject, IService, ISkill } from "./type";
import { VscCircleLargeFilled, VscCircleLargeOutline } from "react-icons/vsc";

export const services: IService[] = [
  {
    title: " 1 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b><b>amet</b></b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: HiOutlineDesktopComputer,
  },
  {
    title: "2 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: MdOutlineDeveloperBoard,
  },
  {
    title: "3 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: DiJava,
  },
  {
    title: "4 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: AiFillApi,
  },
  {
    title: "5 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: SiFrontendmentor,
  },
  {
    title: "6 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: MdDeveloperMode,
  },
  {
    title: "7 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: AiFillDatabase,
  },
  {
    title: "8 Lorem ipsum",
    description:
      "Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <b>Quisquam</b>, voluptatum.",
    Icon: SiCsharp,
  }
];

export const languages: ISkill[] = 
[
  {
    name: "1 Lorem",
    level: "50%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "2 Lorem",
    level: "55%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "3 Lorem",
    level: "60%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "4 Lorem",
    level: "65%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "5 Lorem",
    level: "70%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "6 Lorem",
    level: "75%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "7 Lorem",
    level: "80%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "8 Lorem",
    level: "85%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "9 Lorem",
    level: "90%",
    Icon: VscCircleLargeFilled,
  },
  {
    name: "10 Lorem",
    level: "95%",
    Icon: VscCircleLargeFilled,
  }
];

export const tools: ISkill[] = 
[
  {
    name: "1 ipsum",
    level: "50%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "2 ipsum",
    level: "55%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "3 ipsum",
    level: "60%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "4 ipsum",
    level: "65%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "5 ipsum",
    level: "70%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "6 ipsum",
    level: "75%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "7 ipsum",
    level: "80%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "8 ipsum",
    level: "85%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "9 ipsum",
    level: "90%",
    Icon: VscCircleLargeOutline,
  },
  {
    name: "10 ipsum",
    level: "95%",
    Icon: VscCircleLargeOutline,
  }
];

export const projects:IProject[] = 
[
  {
    name: "1 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["react"],
    key_techs: ["one"],
  },
  {
    name: "2 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["node"],
    key_techs: ["one", "two"],
  },
  {
    name: "3 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["mongo"],
    key_techs: ["three", "four"],
  },
  {
    name: "4 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["express"],
    key_techs: ["five", "six", "seven"],
  },
  {
    name: "5 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["nextjs"],
    key_techs: ["one", "three", "five", "seven", "nine"],
  },
  {
    name: "6 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["react"],
    key_techs: ["one"],
  },
  {
    name: "7 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["node"],
    key_techs: ["one", "two"],
  },
  {
    name: "8 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["mongo"],
    key_techs: ["three", "four"],
  },
  {
    name: "9 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["express"],
    key_techs: ["five", "six", "seven"],
  },
  {
    name: "10 Lorem ipsum",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image_path: "/images/1.png",
    deployed_url: "https://google.com",
    github_url: "https://google.com",
    category: ["nextjs"],
    key_techs: ["one", "three", "five", "seven", "nine"],
  },
]
