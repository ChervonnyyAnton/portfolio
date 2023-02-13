import { IconType } from "react-icons";

export interface IService {
  title: string;
  description: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ISocial {
  name: string;
  link: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface IImage {
  url: string;
  alt: string;
  style: string;
  width: number;
  height: number;
  quality: number;
}

export type Category = "react" | "node" | "mongo" | "express" | "nextjs";