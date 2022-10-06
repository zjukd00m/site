import { useState } from "react";

interface PaginatorProps {
    page: number;
    total: number;
}

export default function Paginator(props: PaginatorProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { page, total } = props;

    const pages = [...Array(page).keys()];

    console.log(pages);

    return (
        <div className="paginator">
            <p> { page } </p>
        </div>
    )
}