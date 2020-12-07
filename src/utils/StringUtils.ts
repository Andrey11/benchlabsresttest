
export const formatNumberToCurrencyString = (amount: number, curSymbol: string = "$", curSymbolInsertFront: boolean = true): string => {
    // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
    const formattedString = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return curSymbolInsertFront ? curSymbol.concat(formattedString) : formattedString.concat(curSymbol);
};