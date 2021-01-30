// $("button").hover(function () {
//     $(this).addClass("color");
// },
//     function () {
//         $(this).removeClass("color");
//     });



var slide = 0;

function showSlides() {
    $(".image-area").hide();
    $(".image-area:eq(" + slide + ")").show();
}
showSlides();

//For buttons 1, 2, 3, and 4
function changeSlide(index) {
    slide = index - 1;
    for (let i = 0; i < $(".button").length; i++) {
        $(".button:eq(" + i + ")").css("background-color", "#03e8fc");
    }
    $(".button:eq(" + slide + ")").css("background-color", "gray");
    showSlides();
}

//For Next Button
$("#Next").on("click", function () {
    if (slide == $(".image-area").length - 1) {
        slide = 0;
    } else {
        slide++;
    }
    for (let i = 0; i < $(".button").length; i++) {
        $(".button:eq(" + i + ")").css("background-color", "#03e8fc");
    }
    $(".button:eq(" + slide + ")").css("background-color", "gray");
    showSlides();
})

//For Previous button
$("#Prev").on("click", function () {
    if (slide == 0) {
        slide = $(".image-area").length - 1;
    } else {
        slide--;
    }
    for (let i = 0; i < $(".button").length; i++) {
        $(".button:eq(" + i + ")").css("background-color", "#03e8fc");
    }
    $(".button:eq(" + slide + ")").css("background-color", "gray");
    showSlides();
})