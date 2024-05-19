
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt  } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiC, SiCplusplus } from "react-icons/si";

export const TechStack = [
    {
        name: "React JS",
        id: "1",
        icon: FaReact,
        accent:"Blue"
    },
    {
        name: "Javascript",
        id: "2",
        icon: IoLogoJavascript,
        accent: "yellow"
    },
    {
        name: "HTML",
        id: "3",
        icon: FaHtml5,
        accent: "orange"
    },
    {
        name: "CSS",
        id: "4",
        icon: FaCss3Alt,
        accent:"blue"
    },
    {
        name: "Tailwind",
        id: "5",
        icon: RiTailwindCssFill,
        accent:"blue"
    },
    {
        name: "Git",
        id: "6",
        icon: FaGitAlt,
        accent:"orange"
    },
    {
        name: "MySql",
        id: "7",
        icon: GrMysql,
        accent:"black"
    },
    {
        name: "C++",
        id: "8",
        icon: SiCplusplus,
        accent:"black"
    },
    {
        name: "C",
        id: "9",
        icon: SiC,
        accent:"black"
    },
];

export const LEET_URL = "https://leetcode-stats-api.herokuapp.com/imutkarsht";
