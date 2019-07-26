var dells = 0;
var productsNumber = document.getElementById("productnumber");
var b2 = 0;
var shown2 = false;
var gol2 = 1;










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











function addDell() {


    if (gol2===1) {
        addRowDell();
    }






    gol2++;



    dells++;
    items++;
     document.querySelector("#nuda2").innerHTML = "Dell - for office wamrs X"+dells;

}

function showNumber2() {

// console.log("items: "+items+"  lenovos: "+lenovos+" macbooks: "+macbooks)



productsNumber.innerHTML = items;
// numberofmacbooks.innerHTML = "X" + macbooks;
}

setInterval(showNumber2, 5);

function addRowDell() {

shown2 = true;

    var div = document.createElement('div');

    div.className = 'productline2';

    div.innerHTML =
        '<div class="product-img">\
                <img src="images/dell.png" width="100">\
            </div>\
            <div class="productinfo">\
                <p id="nuda2">Mackbook 2020 X1</p>\
            </div>\
            <div class="buttons">\
                <button class="addOneMore" onclick="addDell()">Add</button>\
                <button class="remove" onclick="removeRowDell()">X</button>\
            </div>';

    document.getElementById('content').appendChild(div);





    document.querySelector("#nuda2").innerHTML = "Dell - for office wamrs X"+dells;





}



'use strict'

const removeElements2 = (elms) => elms.forEach(el => el.remove());

// Use like:
function deleting2() {
removeElements2( document.querySelectorAll(".delete") );
}

setInterval(deleting2, 5);

function removeRowDell() {
    b2=false;
    shown2 = false;
    items--;
    dells--;


 document.querySelector("#nuda2").innerHTML = "Dell - for office wamrs X"+dells;


    if (dells < 1) {
  var element = document.querySelector(".productline2");
  element.classList.add("delete");
}
}


// setInterval(pop, 5)

// function pop() {
//     console.log(dells)
// }