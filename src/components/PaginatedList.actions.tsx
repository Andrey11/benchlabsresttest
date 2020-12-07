import { AppDispatch } from "../app/store";
import { onLoadPageError, onLoadPageSuccess } from "./PaginatedList.reducer";
import axios from "axios";

export const loadPage = (pageNumber: number) => (dispatch: AppDispatch) => {
    console.log("loadPage: " + pageNumber);

    // axios.get("https://resttest.bench.co/transactions/" + pageNumber + ".json")

    axios.get("https://resttest.bench.co/transactions/" + 5 + ".json")
        .then(response => {
            const payload = {
                rows: response.data.transactions,
                lastLoadedPage: response.data.page,
                loaded: response.data.totalCount <= response.data.page * 10,
                totalCount: response.data.totalCount
            };

            dispatch(onLoadPageSuccess(payload));
        })
        .catch(errorResponse => {
            const errorCode = errorResponse && errorResponse.response ? errorResponse.response.status : 500;
            const payload = {
                error: true,
                errorMessage: ""
            };

            if (errorCode === "404") {
                payload.errorMessage = "404 Page Not Found";
            } else {
                payload.errorMessage = "Ooops, it seems we got a strange error...";
            }

            dispatch(onLoadPageError(payload));
        });
};

