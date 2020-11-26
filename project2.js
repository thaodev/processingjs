function plusFunction() {
    var No1 = parseFloat(document.getElementById("No1").value);
    var No2 = parseFloat(document.getElementById("No2").value);
    var total = No1 + No2;
    document.getElementById("result").innerHTML = total;

}