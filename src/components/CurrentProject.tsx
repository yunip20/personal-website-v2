import { Project } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const CurrentProjects = () => {
    const ongoing: Project[] = [
        {
            title: "Tabi",
            color: "bg-[#264143]",
            img: "/tabi.png",
            lang: ["React", "React Flow", "Typescript", "Convex", "Zustand", "Clerk", "User Research", "Co-design", "Interview", "Competitive Analysis"],
            descr: "Tabi is an AI-assisted web application that helps designers with generating and synthesizing a user journey mapping", 
        },
        {
            title: "Personal Website V2",
            color: "bg-[#264143]",
            img: "/pw2.png",
            lang: ["React", "Next", "Typescript", "Framer motion", "Tailwind CSS"],
            descr: "Currently updating the site. Stay tuned for new content and improved user interactions!", 
        }
    ];

    return (
        <div className="flex flex-col mt-10 space-y-10">
            <span className="font-sans text-lg">
                Currently Working On...
            </span>
            {ongoing.map((project) => (
                <ProjectCard key={project.title} project={project} isOngoing={true} />
            ))}
        </div>
    );
};

export default CurrentProjects;
