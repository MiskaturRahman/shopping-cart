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














// solution from jhankar mahbub
// function handleProductChange(product, isIncrease) {

//     const productCount = getInputValue(product);
//     let productNewCount = productCount;
//     if (isIncrease == true) {
//         productNewCount = productCount + 1;
//     }
//     if (isIncrease == false && productCount > 0) {
//         productNewCount = productCount - 1;
//     }
//     document.getElementById(product + '-count').value = productNewCount;
//     let productTotal = 0;
//     if (product == 'phone') {
//         productTotal = productNewCount * 1219;
//     }
//     if (product == 'case') {
//         productTotal = productNewCount * 59;
//     }

//     document.getElementById(product + '-total').innerText = '$' + productTotal;
//     calculateTotal();
// }

// function calculateTotal() {
//     const phoneCount = getInputValue('phone');
//     const caseCount = getInputValue('case');

//     const totalPrice = phoneCount * 1219 + caseCount * 59;
//     document.getElementById('total-price').innerText = '$' + totalPrice;

//     const tax = Math.round(totalPrice * 0.1);
//     document.getElementById('tax-amount').innerText = '$' + tax;

//     const grandTotal = totalPrice + tax;
//     document.getElementById('grand-total').innerText = '$' + grandTotal;
// }

// function getInputValue(product) {
//     console.log(product);
//     const productInput = document.getElementById(product + '-count');
//     const productCount = parseInt(productInput.value);
//     return productCount;
// }










// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = '$' + phoneTotal;
// }

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// }
// document.getElementById('case-increase').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// });

// document.getElementById('case-decrease').addEventListener('click', function() {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;
// });