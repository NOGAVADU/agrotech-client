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
                {items.page >= 3 ?
                    <div className={cl.end}>
                        <PaginationItem onClick={() => items.setPages(1)}>1</PaginationItem>
                        <span className={cl.placeholder}>...</span>
                    </div>
                    : ''}

                {items.page !== 1 && <PaginationItem onClick={prevPage}>{items.page - 1}</PaginationItem>}
                <PaginationItem active={true}>{items.page}</PaginationItem>
                {items.page !== pages.length && <PaginationItem onClick={nextPage}>{items.page + 1}</PaginationItem>}

                {items.page <= pages.length - 3 ?
                    <div className={cl.end}>
                        <span className={cl.placeholder}>...</span>
                        <PaginationItem onClick={() => items.setPages(pages.length)}>{pages.length}</PaginationItem>
                    </div>
                    : ''}
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