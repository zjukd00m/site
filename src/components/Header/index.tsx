import Navigation from "../Navigation"
import "./styles.css";

export default function Header() {
    return (
        <div className="header">
            <div className="header-container">
                <img src="/assets/zjukd00m.png" alt="my-avatar" className="header-avatar" />
                <div className="header-container-data">
                    <p> zjukd00m </p>
                    <p> Backend Developer </p>
                </div>
                <div className="header-container-icons">
                    <i className="fa-brands fa-github fa-xl"></i>
                    <i className="fa-brands fa-gitlab fa-xl"></i>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                </div>
            </div>
            <div className="header-navigation">
                <Navigation />
            </div>
        </div>
    )
}