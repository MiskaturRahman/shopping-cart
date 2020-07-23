//remove first Item
const decreaser = document.getElementById("decreaser");
decreaser.addEventListener('click', function () {
    removeItemNumber("firstItem", "phonePrice", 1219);
})

//add first Item
const increaser = document.getElementById("increaser");
increaser.addEventListener('click', function () {
    addItemNumber("firstItem", "phonePrice", 1219);
})

//remove second item
const secondDecreaser = document.getElementById("secondDecreaser");
secondDecreaser.addEventListener('click', function () {
    removeItemNumber("secondItem", "casePrice", 59);
})

//add second Item
const secondIncreaser = document.getElementById("secondIncreaser");
secondIncreaser.addEventListener('click', function () {
    addItemNumber("secondItem", "casePrice", 59);
})


//function for adding items
function addItemNumber(itemId, priceId, price) {

    //item counter
    const itemValue = document.getElementById(itemId).value;
    const itemNumber = parseFloat(itemValue);
    const itemText = document.getElementById(itemId).value = itemNumber + 1;

    //price counter
    const itemPrice = document.getElementById(priceId).innerText;
    const itemPriceNumber = parseFloat(itemPrice);
    const itemUpdatePrice = document.getElementById(priceId).innerText = itemPriceNumber + price;

    //tax
    const tax = document.getElementById("tax").innerText;
    const taxValue = parseFloat(tax);

    //subtotal
    const subTotal = document.getElementById("subTotal").innerText;
    const subTotalNumber = parseFloat(subTotal);

    //total price
    const subTotalUpadate = document.getElementById("subTotal").innerText = subTotalNumber + price;
    const totalUpdate = document.getElementById("total").innerText = subTotalNumber + price + taxValue;
}