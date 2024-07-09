import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { useGetProjects } from "./getProjects";
import DownLoadButton from "./DownloadButton";
const Projects = () => {
  const { isLoading, projects } = useGetProjects();

  if (isLoading) {
    <span className="loading loading-spinner loading-md md:loading-lg text-accent"></span>;
  }

  return (
    <section className="bg-base-200 py-10" id="projects">
      <div className="align-element">
        <SectionTitle text="web creations" headerColor="text-base-content" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
        <DownLoadButton />
      </div>
    </section>
  );
};

export default Projects;
