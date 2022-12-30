import BaseCard from "../Base"
import "./styles.css";

const currentlyLearning = [
    {
        title: "Blockchain",
        imgSrc: "/assets/blockchain.png",
        onClick: () => {
            alert("I'm learning at https://university.alchemy.com/");
        }
    },
    {
        title: "Signals and Systems",
        imgSrc: "/assets/signals_and_systems.png",
        onClick: () => {
            alert("Here's what I've learnt for now on: https://github.com/zjukd00m/SignalsAndSystems");
        }
    }
];

export default function CurrentlyLearningCard() {

    return (
        <BaseCard title="Currently Learning">
            <div className="currently-learning-card">
                {
                    currentlyLearning?.map((item, index) => (
                        <div className="currently-learning-item" key={index}>
                            <p 
                                className="card-text" 
                                style={{ margin: "0 0 0.5em 0;" }}
                            > 
                                { item.title }
                            </p>
                            <img 
                                className="currently-learning-item-icon" 
                                src={item.imgSrc} 
                            />
                            <img 
                                className="info-icon" 
                                src="/assets/info-squared.png" 
                                style={{ 
                                    position: "absolute",
                                    right: "0.5em",
                                    bottom: "0.5em",
                                }} 
                                onClick={item.onClick}
                            />
                        </div>
                    ))
                }
            </div>
        </BaseCard>
    )
}
