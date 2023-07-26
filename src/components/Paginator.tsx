import { useState } from "react";

interface PaginatorProps {
    page: number;
    total: number;
}

// Generate a pagination component which receives as input the current page and
// the total number of items to be fetched from the server.
export default function Paginator(props: PaginatorProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { page, total } = props;

    const pages = [...Array(page).keys()];

    return (
        <div className="paginator">
            <p> { page } </p>
        </div>
    )
}
