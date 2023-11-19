function extractCurrencyValue(str) {
    return parseInt(str.slice(1));
}
//Пример
alert(extractCurrencyValue('$120'));