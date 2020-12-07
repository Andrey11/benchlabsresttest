import React from "react";
import { connect, Provider } from "react-redux";
import store from "../app/store";
import PaginatedList from "./PaginatedList.component";
import { loadPage } from "./PaginatedList.actions";
import { formatNumberToCurrencyString } from "../utils/StringUtils";
import { TransactionDataType } from "./PaginatedList.types";

const getTotalAmount = (transactions: Array<TransactionDataType>) => {
    let totalAmount = 0;
    transactions.forEach((transaction) => {
        totalAmount += parseFloat(transaction.Amount);
    });
    return formatNumberToCurrencyString(totalAmount);
}

const getErrorMessage = (error: boolean, errorMsg: string, currentCount: number, totalCount: number): string => {
    if (error && totalCount > 0 && currentCount > 0) {
        let missingTransactions = totalCount - currentCount;
        return "Ooops, it seems we could not load the last " + missingTransactions + " out of " + totalCount + " transactions";
    }
    return errorMsg;
}

const mapStateToProps = (state: any) => {
    const { rows, loaded, error, errorMessage, totalCount, lastLoadedPage, canLoad } = state.paginatedlist;

    return {
        rows: rows,
        totalAmount: getTotalAmount(rows),
        loaded: loaded,
        error: error,
        errorMessage: getErrorMessage(error, errorMessage, rows.length, totalCount),
        pageNumberToLoad: lastLoadedPage + 1,
        canLoad: canLoad
    };

};

const mapDispatchToProps = (dispatch: any) => ({
    loadPageNumber: (num: number) => dispatch(loadPage(num))
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(PaginatedList);

const PaginatedListContainer = (props: any) => (
    <Provider store={store}>
        <Connected {...props} />
    </Provider>
);

export default PaginatedListContainer;