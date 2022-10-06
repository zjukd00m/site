import "../styles/experience-card.css"

interface ExperienceCardProps {
    title: string;
    initialDate: string;
    endDate: string;
    role: string;
    descriptions: string[];
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const { title, initialDate, endDate, role, descriptions } = props;
    return (
        <div className="experience-card-layout">
            <div className="experience-header">
                <p className="experience-title"> { title } </p>
                <div className="experience-dates">
                    <p className="experience-date"> { initialDate } </p>
                    <p className="experience-date">  { "-" }  </p>
                    <p className="experience-date"> { endDate } </p>
                </div>
            </div>
            <p className="experience-role"> { role } </p>
            <ul className="experience-list">
                {
                    descriptions.map((description, index) => (
                        <li className="experience-description" key={index}> 
                           { description }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
