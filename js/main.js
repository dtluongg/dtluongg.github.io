$(function () {
    $(".main-sidebar__wrapper").click(function () {
        $(".active").eq(0).removeClass("active");
        $(this).addClass(" active");
    })

    $("#scroll-on-top").click(function () {
        $(".active").eq(0).removeClass("active");
        $("a[href='#home']").addClass(" active");
    })

    $(".main-content-item").mousemove(function () {
        let id = $(this).attr("id");
        if (id == "skills") {
            id = "about";
        }
        $(".active").eq(0).removeClass("active");
        $("a[href='#" + id + "']").addClass(" active");
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $("#scroll-on-top").css("display", "block");
        } else {
            $("#scroll-on-top").css("display", "none");
        }
    })

    // RES
    $(".main-button").click(function() {
        $(".main-sidebar").css("left", "0");
        $(".main-sidebar").css("z-index", "2");
        $(".main-sidebar").css("background-color", "white");
        $(".main-modal").css("display", "block");
    })

    $(".main-sidebar__wrapper").click(function() {
        $(".main-modal").css("display", "none");
        $(".main-sidebar").css("left", "-200%");
    })

    $(".main-modal").click(function() {
        $(".main-modal").css("display", "none");
        $(".main-sidebar").css("left", "-200%");
    })

    $("#close-sidebar").click(function() {
        $(".main-modal").css("display", "none");
        $(".main-sidebar").css("left", "-200%");
    })
})