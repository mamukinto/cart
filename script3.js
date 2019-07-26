var msis = 0;
var productsNumber = document.getElementById("productnumber");
var b3 = 0;
var shown3 = false;
var gol3 = 1;










// function showCart2() {

//     modal.style.display = "block";
//     cartModal.style.display = "block";

// if (b2===true && shown2===false) {
//     addRowDell();
//     shown2 = true;
// }

// else if(dells > 0 && i===false) {
//     addRowDell();
//     b2=true;
//     shown2 = true;
// }





// }











function addMsi() {


    if (gol3===1) {
        addRowMsi();
    }






    gol3++;



    msis++;
    items++;
     document.querySelector("#nuda3").innerHTML = "MSI - super gaming laptop 2021 X"+msis;

}

function showNumber3() {

// console.log("items: "+items+"  lenovos: "+lenovos+" macbooks: "+macbooks)



productsNumber.innerHTML = items;
// numberofmacbooks.innerHTML = "X" + macbooks;
}

setInterval(showNumber3, 5);

function addRowMsi() {

shown3 = true;

    var div = document.createElement('div');

    div.className = 'productline3';

    div.innerHTML =
        '<div class="product-img">\
                <img src="images/msi.png" width="100">\
            </div>\
            <div class="productinfo">\
                <p id="nuda3">Mackbook 2020 X1</p>\
            </div>\
            <div class="buttons">\
                <button class="addOneMore" onclick="addMsi()">Add</button>\
                <button class="remove" onclick="removeRowMsi()">X</button>\
            </div>';

    document.getElementById('content').appendChild(div);





    document.querySelector("#nuda3").innerHTML = "MSI - super gaming laptop 2021"+msis;





}



'use strict'

const removeElements3 = (elms) => elms.forEach(el => el.remove());

// Use like:
function deleting3() {
removeElements3( document.querySelectorAll(".delete") );
}

setInterval(deleting3, 5);

function removeRowMsi() {
    b3=false;
    shown3 = false;
    items--;
    msis--;


 document.querySelector("#nuda3").innerHTML = "MSI - super gaming laptop 2021 X"+msis;


    if (msis < 1) {
  var element = document.querySelector(".productline3");
  element.classList.add("delete");
}
}


// setInterval(pop, 5)

// function pop() {
//     console.log(dells)
// }