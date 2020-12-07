import React from "react";
import { RowCellProps } from "./PaginatedList.types";
import styles from "./RowCell.module.scss";

const RowCell = ({ text, cls }: RowCellProps) => {
    return <div className={cls ? `${styles.Cell} ${cls}` : styles.Cell}>{text}</div>;
};

export default RowCell;