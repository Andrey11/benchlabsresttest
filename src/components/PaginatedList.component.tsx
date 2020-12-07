import React, { useEffect } from 'react';
import styles from "./PaginatedList.module.scss";
import ListRow from './ListRow.component';
import { formatDateToString, formatNumberToCurrencyString } from '../utils/StringUtils';
import RowCell from './RowCell.component';
import { PaginatedListProps, TransactionDataType } from './PaginatedList.types';

const PaginatedList = ({ rows, totalAmount, pageNumberToLoad, loaded, error, errorMessage, loadPageNumber }: PaginatedListProps) => {
    useEffect(() => {
        if (!loaded && !error) {
            loadPageNumber(pageNumberToLoad);
        }
    });

    const createHeader = (amount: string) => {
        return <ListRow cls={styles.RowHeader}>
            <RowCell text="Date" cls={`${styles.CellDate} ${styles.CellHeader}`} />
            <RowCell text="Company" cls={`${styles.CellCompany} ${styles.CellHeader}`} />
            <RowCell text="Account" cls={`${styles.CellHeader} ${styles.CellLedger}`} />
            <RowCell text={amount} cls={`${styles.CellAmount} ${styles.CellHeader}`} />
        </ListRow>
    };

    const createRows = () => {
        if (rows.length === 0 && !error) {
            return <div className={styles.PaginatedListEmpty}>No results</div>
        }

        return rows.map((row: TransactionDataType, index: number) => (
            <ListRow key={"row-index_" + index}>
                <RowCell text={formatDateToString(row.Date)} cls={styles.CellDate} />
                <RowCell text={row.Company} cls={styles.CellCompany} />
                <RowCell text={row.Ledger} cls={styles.CellLedger} />
                <RowCell text={formatNumberToCurrencyString(parseFloat(row.Amount))} cls={styles.CellAmount} />
            </ListRow>
        ));
    };

    const createPaginatedListPanel = () => {
        return <div className={styles.PaginatedList}>{createRows()}</div>;
    };

    const createPaginatedListErrorPanel = () => {
        if (error) {
            return <div className={styles.PaginatedListError}>{errorMessage}</div>
        }
        return null;
    }

    return <div className={styles.PaginatedContainer}>
        {createHeader(totalAmount)}
        {createPaginatedListErrorPanel()}
        {createPaginatedListPanel()}
    </div>;
}

export default PaginatedList;