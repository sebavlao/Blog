'use client'

import * as React from "react"
import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation";

export const PaginationComponent = ({ page, pageCount }) => {
    const router = useRouter()

    const handlePagination = pageSelect => {
        if (pageSelect == 1) return router.push("/");

        router.push(`?page=${pageSelect}`)
    }

    return (
        <section>
            <Pagination
                onChange={handlePagination} 
                isCompact
                showControls 
                total={pageCount} 
                initialPage={page}/>
        </section>
    )
}