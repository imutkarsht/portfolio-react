import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt  } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiC, SiCplusplus, SiSass } from "react-icons/si";
import { SiLeetcode } from 'react-icons/si';
import { FaHackerrank } from "react-icons/fa";
import { IoMail } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const educationItems = [
    { period: "2023 - 2025", degree: "Master Degree", grade: "9.15", gradeType: "CGPA", institution: "Madan Mohan Malviya University of Technology, Gorakhpur", details: "currently I'm Persuing My Master's in Computer Applications from Madan Mohan Malviya University of Technology, Gorakhpur. Here, I am learning about data Structures, Databases, Web Technologies and other core concepts of CS." },
    { period: "2020 - 2023", degree: "Bachelor's Degree", grade: "68", gradeType: "%", institution: "DDU Gorakhpur University", details: "I completed My Bachelor's Degree in Mathematics and Computer Science from DDU Gorakhpur University in 2023 with 68% score. I also learned Physics in my first 2 years." },
    { period: "2017 - 2019", degree: "Intermediate Degree", grade: "88.4", gradeType: "%", institution: "GM Academy, Salempur", details: "Did my intermediate from GM Academy, Salempur in Year 2019. Here, I learned about Mathematics, Physics, Chemistry, English and Computer Science and passed with 88.4% ." },
    { period: "2015 - 2017", degree: "High School Degree", grade: "8.6", gradeType: "CGPA", institution: "KK Public Academy, Bhatni Deoria", details: "Did my high school from KK Public Academy, Bhatni Deoria in Year 2017. Here, I learned about Mathematics, Science, Social Science, English and Hindi and passed with 8.6 CGPA." }
];

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
        accent:"yellow"
    },
    {
        name: "C++",
        id: "8",
        icon: SiCplusplus,
        accent:"blue"
    },
    {
        name: "C",
        id: "9",
        icon: SiC,
        accent:"blue"
    },
    {
        name: "SASS",
        id: "10",
        icon: SiSass,
        accent:"pink"
    },
];

export const ProbSolv = [
    {
        id: "1",
        name: "Leetcode",
        icon: SiLeetcode,
        data: ["","has over 100 days streak", "Uses C++ as main language"],
        link:"https://www.leetcode.com/imutkarsht",
        accent: "orange"
    },
    {
        id: "2",
        name: "Hackerrank",
        icon: FaHackerrank,
        data: ["5* in C++", "3* in Problem Solving", "3* in Python"],
        link:"https://www.hackerrank.com/profile/uktiwari023",
        accent:"green"
    }
];

export const socialLinks = [
    {
      id:"1",
      name: "LinkedIn",
      link:"https://www.linkedin.com/in/imutkarsht/",
      icon:FaLinkedin
    },
    {
      id:"2",
      name: "Github",
      link:"https://www.github.com/imutkarsht/",
      icon:FaGithub
    },
    {
      id:"3",
      name: "Instagram",
      link:"https://www.instagram.com/im_ut_2308/",
      icon:FaInstagram
    },
    {
      id:"4",
      name: "Gmail",
      link:"mailto:uktiwari023@gmail.com",
      icon:IoMail
    },
  ]

export const projects = [
    {
        id: "1",
        name: "Amazon UI clone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "minor",
        imgSrc: "../../images/AUI.png"
    },
    {
        id: "2",
        name: "Basic Dom Projects",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "minor",
        imgSrc: "../../images/bdp.png"
    },
    {
        id: "3",
        name: "Technokratos EMS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque saepe repellat corporis dolorum delectus at, modi natus ad eos debitis reiciendis. Ea?",
        type: "major",
        imgSrc: "../../images/techems.png"
    },
]