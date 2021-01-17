//Khai Bien
var No1;
var No2;

//Nhan gia tri tu input
function getValue() {
    //obtain user input
    No1 = parseFloat(document.getElementById("No1").value);
    No2 = parseFloat(document.getElementById("No2").value);
}

//Phep Tinh Cong
function addFunction() {
    
    getValue();

    //calculation
    var total = No1 + No2;

    if (!isNaN(total)) {
        document.getElementById("result").value = total;
        console.log(total);
    }
};

//Phep tinh tru
function minFunction() {
    getValue();
    //calculation
    var min = No1 - No2;

    if (!isNaN(min)) {
        document.getElementById("result").value = min;
        console.log(min);

    }
};

//Phep Tinh Nhan
function mulFunction() {
    getValue();
    //calculation
    var mul = No1 * No2;

    if (!isNaN(mul)) {
        document.getElementById("result").value = mul;
        console.log(mul);
    }
};

//Phep Tinh Chia
function divFunction() {
    getValue();
    //calculation
    var div = No1 / No2;

    if (!isNaN(div)) {
        document.getElementById("result").value = div;
        console.log(div);
    }
};

//Phep tinh lay so du
function devideFunction() {
    getValue();
    var bal = No1%No2;
    debugger;
    if (!isNaN(bal)) {
        document.getElementById("result").value = bal;
        console.log(bal);

    }

};