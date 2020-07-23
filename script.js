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
    const itemValue = document.getElementById(itemId).value;
    const itemNumber = parseFloat(itemValue);
    const itemText = document.getElementById(itemId).value = itemNumber + 1;
    const itemPrice = document.getElementById(priceId).innerText;
    const itemPriceNumber = parseInt(itemPrice);
    const itemUpdatePrice = document.getElementById(priceId).innerText = itemPriceNumber + price;
}