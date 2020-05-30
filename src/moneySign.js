// TO ADD THE DOLLAR SIGN TO PRICE

export default function moneySign(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}