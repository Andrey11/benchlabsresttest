import React from "react";

export type RowCellType = {
    text: string;
    cls: string;
};

const RowCell = ({ text, cls }: RowCellType) => {
    return <div className={cls}>{text}</div>;
};

export default RowCell;