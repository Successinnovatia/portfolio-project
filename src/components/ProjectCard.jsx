import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-base-200 rounded-lg shadow-md transition-all ease-in-out hover:shadow-xl hover:scale-[1.02] duration-300">
      <img
          src={img}
          alt={title}
          className="w-full h-64 rounded-t-lg"
        />
      
      <div className="capitalize p-8">
        <h2 className="text-x tracking-wide font-medium">{title}</h2>
        <p className="text-slate-500 mt-4 leading-loose">{text}</p>

        {url ? (
          <div className="mt-4 flex gap-x-4">
            <a href={url}>
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        ) : (
          <div className="mt-4 flex gap-x-4">
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
