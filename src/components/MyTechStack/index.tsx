
import "./styles.css";

const showItemName = false;

export default function MyTechStack() {
    const programmingLanguages = [
        { "name": "Python", "logo": <i className="fa-brands fa-python fa-2xl"></i> },
        { "name": "Typescript", "logo": <i className="fa-brands fa-python fa-2xl"></i> },
        { "name": "Javascript", "logo": <i className="fa-brands fa-js fa-2xl"></i> },
        { "name": "Bash", "logo": <i className="fa-brands fa-python fa-2xl"></i> },
        { "name": "Google Cloud Platform", "logo": <i className="fa-brands fa-google fa-2xl"></i> },
        { "name": "Digital Ocean", "logo": <i className="fa-brands fa-digital-ocean fa-2xl"></i> },
        { "name": "Cloudflare", "logo": <i className="fa-brands fa-cloudflare fa-2xl"></i> },
    ];


    return (
        <div className="my_tech_stack__container">
            <p className="my_tech_stack__title"> My Tech Stack </p>
            <div className="my_tech_stack__languages">
                {
                    programmingLanguages?.map((programmingLanguage) => (
                        <div className="my_tech_stack__language" key={programmingLanguage.name}>
                            { programmingLanguage.logo ? <> { programmingLanguage.logo } </> : null}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}