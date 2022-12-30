import BaseCard from "../Base";

const personalData = [
    {
        title: "Full Name",
        value: "Daniel Ramirez",
    },
    {
        title: "Country",
        value: "México 🇲🇽",
    },
    {
        title: "Age",
        value: 27,
    },
    {
        title: "Gender",
        value: "M"
    },
]

export default function PersonalDataCard() {
    return (
        <BaseCard title="Personal Information">
            <div>
                <ul>
                    {
                        personalData?.map((slot, index) => (
                            <li key={index}>
                                <div className="card-list-element">
                                    <p className="card-list-element-title card-text"> { slot.title } </p>
                                    <p className="card-list-element-value card-text"> { slot.value } </p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </BaseCard>
    )
}
