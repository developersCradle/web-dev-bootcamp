const form = document.querySelector('form');
let list = document.querySelector("#list");



form.addEventListener("submit", function (e) {

    e.preventDefault();

    let newList = document.createElement("li");
    let prodTxt = document.querySelector("#product").value;
    let qtyTxt = document.querySelector("#qty").value;


    newList.innerText = `${qtyTxt} ${prodTxt}`;
    list.appendChild(newList);
    form.elements.product.value = "";
    form.elements.qty.value = "";
});