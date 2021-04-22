var btr = document.getElementById("btn-r");
var bts = document.getElementById("btn-s");
var btm = document.getElementById("btn-m");
var btd = document.getElementById("btn-d");


function multiplica() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    alert(num1*num2)
}

function division() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    alert(num1 / num2)
}

function suma() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    alert(num1 + num2)
}

function resta() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    alert(num1 - num2)
    console.log("a")
}

btm.addEventListener('click', multiplica);
btd.addEventListener('click', division);
bts.addEventListener('click', suma);
btr.addEventListener('click', resta);