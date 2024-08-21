'use client'

import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";

export const PaginationComponent = ({ page, pageCount }) => {
    const router = useRouter()

    return (
        <section>
            <Pagination onChange={handlePage => router.push(`?page=${handlePage}`)} isCompact showControls total={pageCount} initialPage={page}/>
        </section>
    )
}