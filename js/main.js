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
})