import "../styles/tag.css";

interface TagProps {
    title: string;
    backgroundColor: string;
}

export default function Tag(props: TagProps) {
    const { title, backgroundColor } = props;
    return (
        <div className="tag-container" style={{ backgroundColor }}>
           <p className="tag-title"> { title } </p>
        </div>
    )
}