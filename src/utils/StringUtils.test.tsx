import { formatDateToString, formatNumberToCurrencyString, getDateSuffix } from './StringUtils';

test('Should format numbers to currency', () => {
    expect(formatNumberToCurrencyString(0)).toEqual("$0.00");
    expect(formatNumberToCurrencyString(-0)).toEqual("$0.00");
    expect(formatNumberToCurrencyString(-0.49)).toEqual("-$0.49");
    expect(formatNumberToCurrencyString(0.45)).toEqual("$0.45");
    expect(formatNumberToCurrencyString(1)).toEqual("$1.00");
    expect(formatNumberToCurrencyString(-1)).toEqual("-$1.00");
    expect(formatNumberToCurrencyString(1000)).toEqual("$1,000.00");
    expect(formatNumberToCurrencyString(-1000)).toEqual("-$1,000.00");
    expect(formatNumberToCurrencyString(1000000)).toEqual("$1,000,000.00");
    expect(formatNumberToCurrencyString(1000000.49)).toEqual("$1,000,000.49");
    expect(formatNumberToCurrencyString(-1000000.49)).toEqual("-$1,000,000.49");
    expect(formatNumberToCurrencyString(1000000, "£")).toEqual("£1,000,000.00");
    expect(formatNumberToCurrencyString(1000000, "£", false)).toEqual("1,000,000.00£");
});

test('Should add correct posfix to numbers', () => {
    expect(getDateSuffix(0)).toEqual("th");
    expect(getDateSuffix(1)).toEqual("st");
    expect(getDateSuffix(2)).toEqual("nd");
    expect(getDateSuffix(3)).toEqual("rd");
    expect(getDateSuffix(4)).toEqual("th");
    expect(getDateSuffix(10)).toEqual("th");
    expect(getDateSuffix(11)).toEqual("th");
    expect(getDateSuffix(12)).toEqual("th");
    expect(getDateSuffix(13)).toEqual("th");
    expect(getDateSuffix(20)).toEqual("th");
    expect(getDateSuffix(21)).toEqual("st");
    expect(getDateSuffix(22)).toEqual("nd");
    expect(getDateSuffix(23)).toEqual("rd");
    expect(getDateSuffix(100)).toEqual("th");
    expect(getDateSuffix(101)).toEqual("st");
    expect(getDateSuffix(102)).toEqual("nd");
    expect(getDateSuffix(103)).toEqual("rd");
    expect(getDateSuffix(110)).toEqual("th");
    expect(getDateSuffix(111)).toEqual("th");
    expect(getDateSuffix(112)).toEqual("th");
    expect(getDateSuffix(113)).toEqual("th");
    expect(getDateSuffix(1111)).toEqual("th");
    expect(getDateSuffix(1112)).toEqual("th");
    expect(getDateSuffix(1113)).toEqual("th");
    expect(getDateSuffix(1141)).toEqual("st");
    expect(getDateSuffix(1142)).toEqual("nd");
    expect(getDateSuffix(1143)).toEqual("rd");
});

test('Should format date string to MMM DD, YYYY', () => {
    expect(formatDateToString("2000-1-1")).toEqual("Jan 1st, 2000");
    expect(formatDateToString("2000-2-2")).toEqual("Feb 2nd, 2000");
    expect(formatDateToString("2000-3-3")).toEqual("Mar 3rd, 2000");
    expect(formatDateToString("2000-4-4")).toEqual("Apr 4th, 2000");
    expect(formatDateToString("2013-12-12")).toEqual("Dec 12th, 2013");

});