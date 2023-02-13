$(function () {
  const rgba = "rgba(25, 28, 31, 0.8)";

  getHeader().then(
    getFooter().then(
      getHome().then(
        getAbout().then(
          getResume().then(
            getSkill().then(
              getPortfolio().then(
                getContact().then(function () {
                  init();
                })
              )
            )
          )
        )
      )
    )
  );

  function init() {
    let hash = window.location.hash;
    if (!hash) hash = "#home";
    hash = hash.replace("#", "");

    let top = $(document).scrollTop();
    $("header").css("height", top > 120 ? "60px" : "80px");
    $("header").css("background", top > 120 ? rgba : "transparent");
    $(".back_to_top").css("right", top > 120 ? "24px" : "-240px");

    $(document).find(`.custom_navbar a#header_${hash}`).addClass("active");

    $(document).scroll(onDocumentScroll);
    $(document).on("mouseover", ".body_section", onMouseOver);
    $(window).on("hashchange", onHashChange);

    $(document)
      .find("#skill_slider")
      .slick({
        dots: false,
        infinite: true,
        arrows: false,
        swipeToSlide: true,
        speed: 300,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
  }

  function onDocumentScroll() {
    let top = $(this).scrollTop();
    $("header").css("height", top > 120 ? "60px" : "80px");
    $("header").css("background", top > 120 ? rgba : "transparent");
    $(".back_to_top").css("right", top > 120 ? "24px" : "-240px");
  }

  function onHashChange() {
    let hash = window.location.hash;
    if (!hash) hash = "#home";
    hash = hash.replace("#", "");
    $(document).find(`.custom_navbar a`).removeClass("active");
    $(document).find(`.custom_navbar a#header_${hash}`).addClass("active");
  }

  function onMouseOver(e) {
    e.stopPropagation();
    let element = e.currentTarget;
    let id = element.id;

    if (history.pushState) {
      history.pushState(null, null, "#" + id);
    } else {
      location.hash = "#" + id;
    }

    onHashChange();
  }

  function getFooter() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/footer.html",
          dataType: "html",
          success: function (response) {
            $("footer").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getHeader() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/header.html",
          dataType: "html",
          success: function (response) {
            $("header").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getAbout() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/about.html",
          dataType: "html",
          success: function (response) {
            $("#about").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getContact() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/contact.html",
          dataType: "html",
          success: function (response) {
            $("#contact").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getHome() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/home.html",
          dataType: "html",
          success: function (response) {
            $("#home").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getPortfolio() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/portfolio.html",
          dataType: "html",
          success: function (response) {
            $("#portfolio").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getResume() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/resume.html",
          dataType: "html",
          success: function (response) {
            $("#resume").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }

  function getSkill() {
    return new Promise((res, rej) => {
      try {
        $.ajax({
          type: "GET",
          url: "/html/skills.html",
          dataType: "html",
          success: function (response) {
            $("#skills").html(response);
            res(true);
          },
        });
      } catch (error) {
        rej(error);
      }
    });
  }
});
