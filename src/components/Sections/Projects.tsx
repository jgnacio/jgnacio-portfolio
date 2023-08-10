import Title from "../ui/ShowContent/Title";
import RenderProject from "../ui/ShowContent/RenderProject";
import { projects } from "@/data/Projects/ProjectsList";

export default function Projects() {
  return (
    <Title title="Projects" style="center" sticky={true}>
      <div className="flex flex-col project-children">
        <RenderProject projects={projects} />
      </div>
    </Title>
  );
}
