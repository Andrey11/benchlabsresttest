import React, { useEffect } from 'react';
import styles from "./PaginatedList.module.scss";
import ListRow, { ListRowType } from './ListRow.component';

export type PaginatedListType = {
    rows: ListRowType[];
    totalAmount: any;
    loaded: boolean;
    pageNumberToLoad: number;
    loadPageNumber: (pageNum: number) => void;
};


const PaginatedList = ({ rows, totalAmount, loaded, pageNumberToLoad, loadPageNumber }: PaginatedListType) => {
    console.log("list");
    useEffect(() => {
        console.log("list");
        if (!loaded) {
            loadPageNumber(pageNumberToLoad);
        }
    });


    const createHeader = () => {
        return <ListRow Date="Date" Amount={totalAmount} Company="Company" Ledger="Ledger" />;
    };

    const createRows = () => {
        return rows.map((row, index: number) => (
            <ListRow Date={row.Date} Amount={row.Amount} Company={row.Company} Ledger={row.Ledger} key={"row-index_" + index} />
        ));
    };

    return <div className={styles.PaginatedContainer}>
        {createHeader()}
        <div className={styles.PaginatedList}>{createRows()}</div>
    </div>;
}

export default PaginatedList;