import "../../../styles/project-card.css";
interface ProjectURLs {
    logo: string;
    link: string;
}

interface ProjectCardProps {
    key: number;
    title: string;
    description: string;
    urls: ProjectURLs[];
    tags: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
    const { title, urls, tags, description } = props;
    return (
        <div className="project-card-layout">
            <div className="project-card-header">
                <div className="project-card-header-wrapper">
                    <p className="project-card-title"> { title }  </p>
                    <div className="project-card-links">
                        {
                            urls.map(({ logo, link }, index) => (
                                <a className="project-img-href" key={index} href={link} target="_blank">
                                    <img className="project-img-link" src={logo} />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <p className="project-card-description"> { description } </p>
            </div>
            <div className="project-card-tags">
                {
                    tags.map((tag, index) => (
                        <p key={index} className="project-card-tag"> { tag } </p>
                    ))
                }
            </div>
        </div>
    )
}
