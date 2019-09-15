$(function () {
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$(document).ready(function () {
    // C++
    $("#cpp").hover(function () {
        $(this).css("background-color", "#89bbfe");
        $(".cpp-hover").css("background-color", "#89bbfe");
        $(".cpp-hover").css("border", "1px solid #89bbfe");
        $(".cpp-hover").css("border-radius", "20px");
    }, function () {
        $(this).css("background-color", "#c6dbf0");
        $(".cpp-hover").css("background-color", "#c6dbf0");
        $(".cpp-hover").css("border", "none");
        $(".cpp-hover").css("border-radius", "0px");
    });
    // html and CSS
    $("#htmlcss").hover(function () {
        $(this).css("background-color", "#89bbfe");
        $(".htmlcss-hover").css("background-color", "#89bbfe");
        $(".htmlcss-hoverr").css("border", "1px solid #89bbfe");
        $(".htmlcss-hover").css("border-radius", "20px");
    }, function () {
        $(this).css("background-color", "#c6dbf0");
        $(".htmlcss-hover").css("background-color", "#c6dbf0");
        $(".htmlcss-hover").css("border", "none");
        $(".htmlcss-hover").css("border-radius", "0px");
    });
    // C
    $("#ccc").hover(function () {
        $(this).css("background-color", "#89bbfe");
        $(".ccc-hover").css("background-color", "#89bbfe");
        $(".ccc-hoverr").css("border", "1px solid #89bbfe");
        $(".ccc-hover").css("border-radius", "20px");
    }, function () {
        $(this).css("background-color", "#c6dbf0");
        $(".ccc-hover").css("background-color", "#c6dbf0");
        $(".ccc-hover").css("border", "none");
        $(".ccc-hover").css("border-radius", "0px");
    });
    // JavaScript
    $("#jscript").hover(function () {
        $(this).css("background-color", "#89bbfe");
        $(".jscript-hover").css("background-color", "#89bbfe");
        $(".jscript-hoverr").css("border", "1px solid #89bbfe");
        $(".jscript-hover").css("border-radius", "20px");
    }, function () {
        $(this).css("background-color", "#c6dbf0");
        $(".jscript-hover").css("background-color", "#c6dbf0");
        $(".jscript-hover").css("border", "none");
        $(".jscript-hover").css("border-radius", "0px");
    });
});


