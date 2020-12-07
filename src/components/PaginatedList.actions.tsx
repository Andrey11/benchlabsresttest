import { AppDispatch } from "../app/store";
import { onLoadPageSuccess } from "./PaginatedList.reducer";
import axios from "axios";

export const loadPage = (pageNumber: number) => (dispatch: AppDispatch) => {
    console.log("loadPage: " + pageNumber);


    axios.get("https://resttest.bench.co/transactions/" + pageNumber + ".json")
        .then(res => {
            console.log("LOADED: " + res);

            const payload = {
                rows: res.data.transactions,
                lastLoadedPage: res.data.page,
                loaded: res.data.totalCount <= res.data.page * 10,
                totalCount: res.data.totalCount
            };

            dispatch(onLoadPageSuccess(payload));
        })
        .catch();
};

