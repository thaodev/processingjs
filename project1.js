function computeBMI() {
    //obtain user inputs
    var weight1 = parseFloat(document.getElementById("weight1").value);
    var height1 = parseFloat(document.getElementById("height1").value);
    var weight2 = parseFloat(document.getElementById("weight2").value);
    var height2 = parseFloat(document.getElementById("height2").value);

    //Perform calculation
    var BMI1 = weight1/(height1*height1);
    var BMI2 = weight1/(height2*height2);
    var result;

    //Display BMI of each person
    document.getElementById("BMI1").innerHTML = "BMI của Toàn là " + BMI1;
    document.getElementById("BMI2").innerHTML = "BMI của Minh là " + BMI2;

    //Display BMI of each person on console
    console.log("BMI của Toàn là " + BMI1);
    console.log("BMI của Minh là " + BMI2);


    if (BMI1 > BMI2) {
        result = "BMI của Toàn lớn hơn BMI của Minh";
        console.log("BMI của Toàn nhỏ hơn BMI của Minh");
    }
    else if (BMI1 < BMI2) {
        result = "BMI của Toàn nhỏ hơn BMI của Minh";
        console.log("BMI của Toàn lớn hơn BMI của ");
    }
    else {
        result = "Đó là điều không thể";
        console.log("Đó là điều không thể");
    }
    document.getElementById("res").innerHTML = result;
}


// var height1 = 155;
// var weight1 = 300;
// var height2 = 160;
// var weight2 = 180;

// var BMI1 = weight1/(height1*height1);
// var BMI2 = weight2/(height2*height2);

// console.log("BMI của Toàn là " + BMI1);
// console.log("BMI của Minh là " + BMI2);

// if (BMI1 < BMI2) {
//     console.log("BMI của Toàn nhỏ hơn BMI của Minh");
// }

// if (BMI1 > BMI2) {
//     console.log("BMI của Toàn lớn hơn BMI của ")
// }

// if (BMI <= 18.5) {
//     console.log("You are under weight");
// }
// else if (BMI > 18.5 && BMI <= 24.9) {
//     console.log("You are normall weight");
// }
// else if (BMI > 25 && BMI <= 29.9) {
//     console.log("You are overweight")
// }
// else {
//     console.log("You are obesity")
// }

