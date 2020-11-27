var No1;
var No2;

function getValue() {
    //obtain user input
    No1 = parseFloat(document.getElementById("No1").value);
    No2 = parseFloat(document.getElementById("No2").value);
}
function addFunction() {
    getValue();

    //calculation
    var total = No1 + No2;

    if (!isNaN(total)) {
        document.getElementById("result").innerHTML = total;
        console.log(total);

    }
};
function minFunction() {
    getValue();
    //calculation
    var min = No1 - No2;

    if (!isNaN(min)) {
        document.getElementById("result").innerHTML = min;
        console.log(min);

    }
};

function mulFunction() {
    getValue();
    //calculation
    var mul = No1 * No2;

    if (!isNaN(mul)) {
        document.getElementById("result").innerHTML = mul;
        console.log(mul);
    }
};

function divFunction() {
    getValue();
    //calculation
    var div = No1 / No2;

    if (!isNaN(div)) {
        document.getElementById("result").innerHTML = div;
        console.log(div);
    }
};