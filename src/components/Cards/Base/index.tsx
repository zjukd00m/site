import type { BaseCardProps } from "../types";
import "./styles.css";

export default function BaseCard(props: BaseCardProps) {
    const { title, subtitle, children } = props;

    return (
        <div className="base-card">
            <div className="base-card-header">
                <p className="base-card-header-title"> { title } </p>
                { subtitle ? <p className="base-card-header-subtitle"> { subtitle } </p> : null }
            </div>
            <div className="base-card-body">
                { children }
            </div>
        </div>
    )
}
