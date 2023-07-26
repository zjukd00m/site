import "./styles.css";

const navigationSections = [
    { 
        sectionName: "Who Am I ?",
        path: "/",
    },
    { 
        sectionName: "Experience",
        path: "/experience",
    },
    { 
        sectionName: "Projects",
        path: "/projects",
    },
    { 
        sectionName: "Blog",
        path: "/blog",
    },
]

export default function Navigation() {
    return (
        <div className="navigation">
            <ul className="navigation-list">
                {
                    navigationSections.map((navSection, index) => (
                        <li key={index} className="navigation-list-item">
                            <a href={navSection.path}>
                                { navSection.sectionName }
                            </a>
                        </li>
                    ))
                }
            </ul> 
        </div>
    )
}