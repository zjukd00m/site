import type { ModalProps } from "./types"
import "./styles.css";

export default function Modal(props: ModalProps) {
    const { child } = props;
    return (
        <div className="modal-container">
            { child }
        </div>
    )
}