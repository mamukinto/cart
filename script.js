var link1 = document.querySelector(".link1");
var link2 = document.querySelector(".link2");
var link3 = document.querySelector(".link3");
var products = {
    'macbook': false,
    'phone': false
}
var items = 0;
var macbooks = 0;
var productsNumber = document.getElementById("productnumber");
var modal = document.querySelector(".modal");
var cartModal = document.querySelector(".cartModal");
var i = false;
var j = 1;
var shown;
var gol = 1;






function  activate1() {

    link1.classList.add("active");
    link2.classList.remove("active");
    link3.classList.remove("active");

}

function  activate2() {

    link1.classList.remove("active");
    link2.classList.add("active");
    link3.classList.remove("active");

}

function  activate3() {

    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.add("active");

}

function addMacBook() {

if (gol===1) {
    addRow();
}

gol++;
    macbooks++;
    items++;
    



document.querySelector("#nuda").innerHTML = "Macbook 2020 X"+macbooks;


}

function showNumber() {




productsNumber.innerHTML = items;
// numberofmacbooks.innerHTML = "X" + macbooks;
}

setInterval(showNumber, 5);



function showCart() {
    modal.style.display = "block";
    cartModal.style.display = "block";
}

function closeCart() {
    modal.style.display = "none";
    cartModal.style.display = "none";
}

function addRow() {

    shown=true;

    var div = document.createElement('div');

    div.className = 'productline';

    div.innerHTML =
        '<div class="product-img">\
                <img src="images/product.svg" width="100" height="100">\
            </div>\
            <div class="productinfo">\
                <p id="nuda">Mackbook 2020 X1</p>\
            </div>\
            <div class="buttons">\
                <button class="addOneMore" onclick="addMacBook()">Add</button>\
                <button class="remove" onclick="removeRow()">X</button>\
            </div>';

    document.getElementById('content').appendChild(div);

document.querySelector("#nuda").innerHTML = "Macbook 2020 X"+macbooks;

// setInterval(lol, 5)

// function lol() {
//     if (shown) {
//     document.querySelector("#nuda").innerHTML = "Macbook 2020 X"+macbooks;
// }
// }

}



'use strict'

const removeElements = (elms) => elms.forEach(el => el.remove());

// Use like:
function deleting() {
removeElements( document.querySelectorAll(".delete") );
}

setInterval(deleting, 5);

function removeRow() {

    i=false;
    shown = false;
    items--;
    macbooks--;

    document.querySelector("#nuda").innerHTML = "Macbook 2020 X"+macbooks;


    if (macbooks < 1) {
  var element = document.querySelector(".productline");
  element.classList.add("delete");



}
}


// setInterval(showStat, 30)

// function showStat() {
//     console.log("ITEMS: "+items+"   MACBOOKS: "+ macbooks);
// }




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});