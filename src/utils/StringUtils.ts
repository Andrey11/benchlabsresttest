
export const MONTHS = ["NA", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatNumberToCurrencyString = (amount: number, curSymbol: string = "$", curSymbolInsertFront: boolean = true): string => {
    const negativeSign = amount < 0 ? "-" : "";
    const absoluteAmount = Math.abs(amount);
    // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
    let formattedString = absoluteAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    formattedString = curSymbolInsertFront ? curSymbol.concat(formattedString) : formattedString.concat(curSymbol);
    return negativeSign.concat(formattedString);
};

export const getDateSuffix = (date: number): string => {
    let suffix = "th";
    if (date % 10 === 1 && date % 100 !== 11) {
        suffix = "st";
    } else if (date % 10 === 2 && date % 100 !== 12) {
        suffix = "nd";
    } else if (date % 10 === 3 && date % 100 !== 13) {
        suffix = "rd";
    }
    return suffix;
};

export const formatDateToString = (dateString: string): string => {
    let formattedDate: string = "";
    const dateArray = dateString ? dateString.split("-") : null;

    if (dateArray) {
        const month = MONTHS[parseInt(dateArray[1])];
        const date = parseInt(dateArray[2]);
        const dateSuffix = getDateSuffix(date);
        const year = dateArray[0];
        formattedDate = month + " " + date + dateSuffix + ", " + year;
    }

    return formattedDate;
};