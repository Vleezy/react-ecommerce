// TO ADD THE DOLLAR SIGN TO PRICE
//ToFixed is using 1 decimal point
//Function declaration that takes in num and returns $ + number and changes toLocaleString
export default function moneySign(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}