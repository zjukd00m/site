import BaseCard from "../Base";
import type { BaseCardProps } from "../types";
// import "./styles.css";


export default function DescriptionCard() {
    return (
        <BaseCard title="Description">
            <div>
                <p className="card-text"> 
                    I'm interested in building servers, give them some functionality using REST and GraphQL API's, 
                    build and deploy them using containers, I use both sql and no sql databases and cloud services. 
                </p>
                <br />
                <p className="card-text">
                    I might be considered a "Full Stack" developer since I know how to write apps with react.js, html and css.
                </p>
                <br />
                <p className="card-text">
                    I'd say my main skill is to be an autodidact learner using mainly books and documentation, 
                    complemented with videos from online resources.
                </p>
            </div>
        </BaseCard>
    )
}