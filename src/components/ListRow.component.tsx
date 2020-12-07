import React from "react";
import styles from "./ListRow.module.scss";
import RowCell from "./RowCell.component";

export type ListRowType = {
    Date: string;
    Ledger: string;
    Amount: string;
    Company: string;
};

const ListRow = ({ Date, Ledger, Amount, Company }: ListRowType) => {
    return <div className={styles.Row}>
        <RowCell text={Date} cls={`${styles.Cell} ${styles.CellDate}`} />
        {/* <div className={`${styles.Cell} ${styles.CellDate}`}>{Date}</div> */}
        <div className={`${styles.Cell} ${styles.CellCompany}`}>{Company}</div>
        <div className={`${styles.Cell} ${styles.CellLedger}`}>{Ledger}</div>
        <div className={`${styles.Cell} ${styles.CellAmount}`}>{Amount}</div>
    </div>;
};

export default ListRow;