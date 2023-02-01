import { IconType } from 'react-icons';

export interface IService
{
    title: string;
    description: string;
    Icon: IconType;
}

export interface ISkill 
{
    name: string;
    level: string;
    Icon: IconType;
}