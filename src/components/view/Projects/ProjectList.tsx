import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import "../../../styles/project-view.css";

interface ProjectViewProps {
    projects: any[];
}

export default function ProjectList(props: ProjectViewProps) {
    const { projects } = props;
    const totalItemsPerPage = 4;
    const totalPages = Math.ceil(projects.length / totalItemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = useMemo(() => (currentPage - 1) * totalItemsPerPage , [currentPage]);
    const endIndex = useMemo(() => startIndex + totalItemsPerPage, [startIndex]);

    return (
        <div className="project-list-container">
            <div className="list-container">
                { projects.slice(startIndex, endIndex)?.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.frontmatter.title}
                        description={project.frontmatter.description}
                        urls={project.frontmatter.urls}
                        tags={project.frontmatter.tags}
                    />
                ))}
            </div>

            <div id="paginator" className="paginator">
                {
                    totalPages >= 1 ? ( 
                        [...Array(totalPages).keys()].map((page, index) => (
                            <div 
                                key={index} 
                                className={`paginator-page ${page + 1 === currentPage ? "active-page" : null}`} 
                                onClick={() => setCurrentPage(page + 1)}
                            >
                            </div>
                        ))
                    ) : null 
                }
            </div>
        </div>
    )
}