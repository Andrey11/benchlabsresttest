
export type TransactionDataType = {
    Date: string;
    Company: string;
    Ledger: string;
    Amount: string;
}

export type PayloadDataType = {
    rows: TransactionDataType[],
    lastLoadedPage: number,
    totalCount: number
}

export type PayloadErrorType = {
    error: boolean,
    errorMessage: string
}

export type PaginatedListState = {
    rows: TransactionDataType[],
    lastLoadedPage: number,
    loaded: boolean,
    totalCount: number,
    errorMessage: string,
    error: boolean
}

export type PaginatedListProps = {
    rows: TransactionDataType[];
    totalAmount: any;
    pageNumberToLoad: number;
    loaded: boolean;
    error: boolean;
    errorMessage: string;
    loadPageNumber: (pageNum: number) => void;
};

export type ListRowProps = {
    cls?: string;
    children: any;
};

export type RowCellProps = {
    text: string;
    cls: string;
};