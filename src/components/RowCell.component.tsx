import React from "react";
import styles from "./RowCell.module.scss";

export type RowCellType = {
    text: string;
    cls: string;
};

const RowCell = ({ text, cls }: RowCellType) => {
    return <div className={`${styles.Cell} ${cls}`}>{text}</div>;
};

export default RowCell;