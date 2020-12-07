import React, { useEffect } from 'react';
import styles from "./PaginatedList.module.scss";
import ListRow from './ListRow.component';
import { formatDateToString, formatNumberToCurrencyString } from '../utils/StringUtils';
import RowCell from './RowCell.component';

export type RowDataType = {
    Date: string;
    Company: string;
    Ledger: string;
    Amount: string;
}

export type PaginatedListType = {
    rows: RowDataType[];
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
        // return <ListRow cls="Row" Date="Date" Amount={totalAmount} Company="Company" Ledger="Ledger" />;
        return <ListRow>
            <RowCell text="Date" cls={`${styles.CellDate} ${styles.CellHeader}`} />
            <RowCell text="Company" cls={`${styles.CellCompany} ${styles.CellHeader}`} />
            <RowCell text="Ledger" cls={`${styles.CellHeader} ${styles.CellLedger}`} />
            <RowCell text={totalAmount} cls={`${styles.CellAmount} ${styles.CellHeader}`} />
        </ListRow>
    };

    const createRows = () => {
        return rows.map((row: RowDataType, index: number) => (
            <ListRow key={"row-index_" + index}>
                <RowCell text={formatDateToString(row.Date)} cls={styles.CellDate} />
                <RowCell text={row.Company} cls={styles.CellCompany} />
                <RowCell text={row.Ledger} cls={styles.CellLedger} />
                <RowCell text={formatNumberToCurrencyString(parseFloat(row.Amount))} cls={styles.CellAmount} />
            </ListRow>
        ));
    };

    return <div className={styles.PaginatedContainer}>
        {createHeader()}
        <div className={styles.PaginatedList}>{createRows()}</div>
    </div>;
}

export default PaginatedList;