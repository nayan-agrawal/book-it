'use client';

import Pagination from 'react-js-pagination'
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";

interface Props {
    resPerPage: number,
    filteredRoomsCount: number
}

const CustomPagination = ({filteredRoomsCount, resPerPage}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    let page = searchParams.get("page") || 1;
    page = Number(page);

    let queryParams;

    const handlePageChange = (currentPage: string) => {
        if (typeof window !== 'undefined') {
            queryParams = new URLSearchParams(window.location.search);
            if (queryParams.has('page')) {
                queryParams.set('page', currentPage);
            } else {
                queryParams.append('page', currentPage);
            }

            const path = `${window.location.pathname}?${queryParams.toString()}`;
            router.push(path);
        }
    }

    return <div>
        {resPerPage < filteredRoomsCount && (<div className="d-flex justify-content-center mt-5">
            <Pagination
                activePage={page}
                itemsCountPerPage={resPerPage}
                totalItemsCount={filteredRoomsCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>)}
    </div>
}

export default CustomPagination;