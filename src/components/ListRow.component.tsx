import React from "react";
import styles from "./ListRow.module.scss";

export type ListRowType = {
    cls?: string;
    children: any;
};

const ListRow = ({ cls, children }: ListRowType) => {
    let clsProps = styles.Row;

    if (cls) {
        clsProps = `${styles.Row} ${cls}`;
    }

    return <div className={clsProps}>
        {children}
    </div>;
};

export default ListRow;