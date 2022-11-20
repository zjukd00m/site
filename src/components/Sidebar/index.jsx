import "./styles.css";

const menuOptions = [
    {
        name: "Who Am I ?",
        path: "/"
    },
    {
        name: "Experience",
        path: "/experience",
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];
    

export default function Sidebar() {
    return (
        <div className="view">
            <div className="sidebar-top">
                <div className="zjk-avatar"></div>
                <div className="zection">
                    <p className="zjk-name"> Zjukd00m </p>
                    <p className="zjk-role"> Backend developer </p>
                </div>
                <div id="hamburguer-menu">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div id="sidebar-bottom" className="sidebar-bottom">
                <div className="sidebar-menu">
                    <ul className="menu-list">
                        {
                            menuOptions.map(({ name, path }, key) => (
                                <li className="list-element" key={key}>
                                    <a href={path} className="list-item"> { name } </a>
                                </li>
                            ))
                        }
                    </ul>                
                </div>
                <div>
                    <a href="https://github.com/zjukd00m" target="_blank">
                        <img className="social-icon" alt="Github" src="assets/github.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}
