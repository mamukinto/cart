var lenovos = 0;
var productsNumber = document.getElementById("productnumber");
var b = 0;
var shown1 = false;
var gol1 = 1;










// function showCart1() {

//     modal.style.display = "block";
//     cartModal.style.display = "block";

// if (b===true && shown1===false) {
//     addRowLenovo();
//     shown1 = true;
// }

// else if(lenovos > 0 && i===false) {
//     addRowLenovo();
//     b=true;
//     shown1 = true;
// }





// }











function addLenovo() {

    if (gol1===1) {
        addRowLenovo();
    }


    gol1++;

    lenovos++;
    items++;
     document.querySelector("#nuda1").innerHTML = "Lenovo - Super flat 2019 X"+lenovos;

}

function showNumber1() {

// console.log("items: "+items+"  lenovos: "+lenovos+" macbooks: "+macbooks)



productsNumber.innerHTML = items;
// numberofmacbooks.innerHTML = "X" + macbooks;
}

setInterval(showNumber1, 5);

function addRowLenovo() {

shown1 = true;

    var div = document.createElement('div');

    div.className = 'productline1';

    div.innerHTML =
        '<div class="product-img">\
                <img src="images/lenovo.png" width="100">\
            </div>\
            <div class="productinfo">\
                <p id="nuda1">Mackbook 2020 X1</p>\
            </div>\
            <div class="buttons">\
                <button class="addOneMore" onclick="addLenovo()">Add</button>\
                <button class="remove" onclick="removeRowLenovo()">X</button>\
            </div>';

    document.getElementById('content').appendChild(div);





    document.querySelector("#nuda1").innerHTML = "Lenovo - Super flat 2019 X"+lenovos;





}



'use strict'

const removeElements1 = (elms) => elms.forEach(el => el.remove());

// Use like:
function deleting1() {
removeElements1( document.querySelectorAll(".delete") );
}

setInterval(deleting1, 5);

function removeRowLenovo() {
    b=false;
    shown1 = false;
    items--;
    lenovos--;


 document.querySelector("#nuda1").innerHTML = "Lenovo - Super flat 2019 X"+lenovos;


    if (lenovos < 1) {
  var element = document.querySelector(".productline1");
  element.classList.add("delete");
}
}
