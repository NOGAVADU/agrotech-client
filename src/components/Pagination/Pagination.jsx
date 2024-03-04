import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";
import cl from './Pagination.module.css'
import PaginationItem from "./PaginationItem.jsx";
import PaginationList from "./PaginationList.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = observer(() => {
    const {items} = useContext(Context);

    const pageCount = Math.ceil(items.totalCount / items.limit);
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    const nextPage = () => {
        if (items.page !== pageCount) {
            items.setPages(items.page + 1)
        }
    }
    const prevPage = () => {
        if (items.page !== 1) {
            items.setPages(items.page - 1)
        }
    }

    return (
        <div>
            {pages.length <= 1 ? "" : <PaginationList>
                <button
                    className={cl.pagination__btn}
                    onClick={prevPage}
                >
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </button>
                {pages.map((page) => (
                    <PaginationItem
                        key={page}
                        active={items.page === page}
                        onClick={() => items.setPages(page)}
                    >
                        {page}
                    </PaginationItem>
                ))}
                <button
                    className={cl.pagination__btn}
                    onClick={nextPage}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </PaginationList>}

        </div>
    );
});
export default Pagination;