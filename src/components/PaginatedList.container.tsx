import React from "react";
import { connect, Provider } from "react-redux";
import store from "../app/store";
import PaginatedList from "./PaginatedList.component";
import { loadPage } from "./PaginatedList.actions";
import { formatNumberToCurrencyString } from "../utils/StringUtils";



const getTotalAmount = (transactions: Array<any>) => {
    let totalAmount = 0;
    transactions.forEach((transaction) => {
        totalAmount += parseFloat(transaction.Amount);
    });
    return formatNumberToCurrencyString(totalAmount);
}

const mapStateToProps = (state: any, ownProps: any) => ({
    rows: state.paginatedlist.rows,
    totalAmount: getTotalAmount(state.paginatedlist.rows),
    loaded: state.paginatedlist.loaded,
    pageNumberToLoad: state.paginatedlist.lastLoadedPage + 1
});

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