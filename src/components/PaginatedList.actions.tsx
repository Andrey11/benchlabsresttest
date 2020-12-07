import { AppDispatch } from "../app/store";
import { onLoadPageError, onLoadPageSuccess } from "./PaginatedList.reducer";
import axios from "axios";
import { PayloadDataType, PayloadErrorType } from "./PaginatedList.types";

export const loadPage = (pageNumber: number) => (dispatch: AppDispatch) => {
    axios.get("https://resttest.bench.co/transactions/" + pageNumber + ".json")
        .then(response => {
            const payload: PayloadDataType = {
                rows: response.data.transactions,
                lastLoadedPage: response.data.page,
                totalCount: response.data.totalCount
            };

            dispatch(onLoadPageSuccess(payload));
        })
        .catch(errorResponse => {
            const errorCode = errorResponse && errorResponse.response ? errorResponse.response.status : 500;
            const payload: PayloadErrorType = {
                error: true,
                errorMessage: ""
            };

            if (errorCode === 404) {
                payload.errorMessage = "(404) Ooops, it seems we could not find the source";
            } else {
                payload.errorMessage = "(" + errorCode + ") Ooops, it seems we got a strange error...";
            }

            dispatch(onLoadPageError(payload));
        });
};

