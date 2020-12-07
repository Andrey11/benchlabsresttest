import React from "react";
import styles from "./ListRow.module.scss";
import { ListRowProps } from "./PaginatedList.types";

const ListRow = ({ cls, children }: ListRowProps) => {
    return <div className={cls ? `${styles.Row} ${cls}` : styles.Row}>
        {children}
    </div>;
};

export default ListRow;