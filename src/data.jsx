import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export const textSets = [
  ["A Software Developer", "Turning Ideas Into Interactive Reality"],
  ["A Passionate Coder", "Crafting Seamless Digital Experience"],

  ["A Fullstack Developer", "Bridging Design and Technology"],
];

export const links = [
  { id: nanoid(), href: "#home", text: "home" },

  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },

  { id: nanoid(), href: "#projects", text: "projects" },
];

export const socialLinks = [
  {
    id: nanoid(),
    url: "https://github.com/Successinnovatia",
    icon: (
      <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    ),
  },

  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/divine-success-6828b21a6",
    icon: (
      <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    ),
  },
  {
    id: nanoid(),
    url: "https://x.com/emperordivo",
    icon: (
      <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
    ),
  },
];
export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-accent" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-accent" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-accent" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Python/Django",
    icon: <FaPython className="h-16 w-16 text-accent" />,
    text: "Expertise in Python and Django, building robust and scalable back-end solutions with a focus on clean, maintainable code and seamless integration with front-end technologies.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
