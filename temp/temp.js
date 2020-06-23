// index
$(function () {
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;

    // Mobile height fix
    $(".height-fix").each(function () {
      var h = $(this).height();
      $(this).height(h);
    });
  }

  // RESIZE RESETS
  $(window).resize(function () {
    posFilterBar($(".filter").first());
  });

  // Sticky Nav on Mobile
  if (isMobile) {
    $("nav").addClass("fixed");
  } else {
    $("nav").addClass("desk");
  }

  // NAV POSITION
  var navPos = $("nav").position().top;
  var lastPos = 0;
  var lockTimer;

  $(window).on("scroll", function () {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (!isMobile) {
      if (pos >= navPos + $("nav").height() && lastPos < pos) {
        $("nav").addClass("fixed");
      }
      if (pos < navPos && lastPos > pos) {
        $("nav").removeClass("fixed");
      }
      lastPos = pos;
    }

    // Link Highlighting
    if (pos2 > $("#home").offset().top) {
      highlightLink("home");
    }
    if (pos2 > $("#about").offset().top) {
      highlightLink("about");
    }
    if (pos2 > $("#portfolio").offset().top) {
      highlightLink("portfolio");
    }
    if (pos2 > $("#blog").offset().top) {
      highlightLink("blog");
    }
    if (
      pos2 > $("#contact").offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink("contact");
    }

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if (!$("body").hasClass("disable-hover")) {
      $("body").addClass("disable-hover");
    }

    lockTimer = setTimeout(function () {
      $("body").removeClass("disable-hover");
    }, 500);
  });

  function highlightLink(anchor) {
    $("nav .active").removeClass("active");
    $("nav")
      .find('[dest="' + anchor + '"]')
      .addClass("active");
  }

  // EVENT HANDLERS
  $(".page-link").click(function () {
    var anchor = $(this).attr("dest");
    $(".link-wrap").removeClass("visible");

    $("nav span").removeClass("active");
    $("nav")
      .find('[dest="' + anchor + '"]')
      .addClass("active");

    $("html, body").animate(
      {
        scrollTop: $("#" + anchor).offset().top,
      },
      400
    );
  });

  $(".mdi-menu").click(function () {
    $(".link-wrap").toggleClass("visible");
  });

  $(".blog-wrap").hover(
    function () {
      $(".blog-wrap").not(this).addClass("fade");
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
      $(".blog-wrap").removeClass("fade");
    }
  );

  posFilterBar($(".filter").first());

  $(".filter").click(function () {
    posFilterBar(this);
  });

  function posFilterBar(elem) {
    var origin = $(elem).parent().offset().left;
    var pos = $(elem).offset().left;
    $(".float-bar").css({
      left: pos - origin,
      width: $(elem).innerWidth(),
    });
    $(".float-bar .row").css("left", (pos - origin) * -1);
  }

  // GALLERY
  $("#gallery").mixItUp({});

  function mixClear() {
    setTimeout(function () {
      $("#gallery").removeClass("waypoint");
    }, 2000);
  }

  // SCROLL ANIMATIONS
  function onScrollInit(items, elemTrigger) {
    var offset = $(window).height() / 1.6;
    items.each(function () {
      var elem = $(this),
        animationClass = elem.attr("data-animation"),
        animationDelay = elem.attr("data-delay");

      elem.css({
        "-webkit-animation-delay": animationDelay,
        "-moz-animation-delay": animationDelay,
        "animation-delay": animationDelay,
      });

      var trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function () {
          elem.addClass("animated").addClass(animationClass);
          if (elem.get(0).id === "gallery") mixClear(); //OPTIONAL
        },
        {
          triggerOnce: true,
          offset: offset,
        }
      );
    });
  }

  setTimeout(function () {
    onScrollInit($(".waypoint"));
  }, 10);

  // CONTACT FORM
  $("#contact-form").submit(function (e) {
    e.preventDefault();

    $.ajax({
      url: "https://formspree.io/mattwilliams85@gmail.com",
      method: "POST",
      data: { message: $("form").serialize() },
      dataType: "json",
    }).done(function (response) {
      $("#success").addClass("expand");
      $("#contact-form")
        .find("input[type=text], input[type=email], textarea")
        .val("");
    });
  });

  $("#close").click(function () {
    $("#success").removeClass("expand");
  });
});

// Canvas
var space;

function floatySpace() {
  var colors = ["#FF3F8E", "#04C2C9", "#2E55C1"];

  space = new CanvasSpace("canvas", "#252934").display();
  var form = new Form(space);

  // Elements
  var pts = [];
  var center = space.size.$divide(1.8);
  var angle = -(window.innerWidth * 0.5);
  var count = window.innerWidth * 0.05;
  if (count > 150) count = 150;
  var line = new Line(0, angle).to(space.size.x, 0);
  var mouse = center.clone();

  var r = Math.min(space.size.x, space.size.y) * 1;
  for (var i = 0; i < count; i++) {
    var p = new Vector(
      Math.random() * r - Math.random() * r,
      Math.random() * r - Math.random() * r
    );
    p.moveBy(center).rotate2D((i * Math.PI) / count, center);
    p.brightness = 0.1;
    pts.push(p);
  }

  // Canvas
  space.add({
    animate: function (time, fps, context) {
      for (var i = 0; i < pts.length; i++) {
        // rotate the points slowly
        var pt = pts[i];

        pt.rotate2D(Const.one_degree / 20, center);
        form
          .stroke(false)
          .fill(colors[i % 3])
          .point(pt, 1);

        // get line from pt to the mouse line
        var ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

        // opacity of line derived from distance to the line
        var opacity = Math.min(
          0.8,
          1 - Math.abs(line.getDistanceFromPoint(pt)) / r
        );
        var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

        if (distFromMouse < 50) {
          if (pts[i].brightness < 0.3) pts[i].brightness += 0.015;
        } else {
          if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01;
        }

        var color = "rgba(255,255,255," + pts[i].brightness + ")";
        form.stroke(color).fill(true).line(ln);
      }
    },

    onMouseAction: function (type, x, y, evt) {
      if (type == "move") {
        mouse.set(x, y);
      }
    },

    onTouchAction: function (type, x, y, evt) {
      this.onMouseAction(type, x, y);
    },
  });

  space.bindMouse();
  space.play();
}

floatySpace();

$(window).resize(function () {
  space.removeAll();
  $("canvas").remove();
  floatySpace();
});

// Modal

$(document).ready(function () {
  // MODAL
  var modalText = {
    discover: {
      title: "ChowNow Discover",
      tag: "FOOD ORDERING PLATFORM.",
      detail:
        "ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.",
      link: "https://eat.chownow.com/",
    },
    ordering: {
      title: "ChowNow Ordering Web",
      tag: "WHITE-LABEL ONLINE ORDERING SOLUTION.",
      detail:
        "ChowNow is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.",
      link: "https://direct.chownow.com/direct/195/locations/260",
    },
    newrelic: {
      title: "NewRelic.com",
      tag: "APPLICATION PERFORMANCE MONITORING.",
      detail:
        "Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.",
      link: "http://www.newrelic.com",
    },
    roambi: {
      title: "Roambi.com",
      tag: "BUSINESS ANALYTICS.",
      detail:
        "Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.",
      link: "http://www.roambi.com",
    },
    walker: {
      title: "WalkerTracker",
      tag: "PERFORMANCE METRICS.",
      detail:
        "Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.",
    },
    powur: {
      title: "Powur.com",
      tag: "CONSUMER POWERED MARKETING.",
      detail:
        "Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.",
      link: "http://www.powur.com/with/42",
    },
    mystand: {
      title: "MyStand",
      tag: "CROWD-FUNDED CHARITY.",
      detail:
        "MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.",
    },
    never: {
      title: "NeverSurrender",
      tag: "ALS AWARENESS.",
      detail:
        "NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.",
    },
    themall: {
      title: "The Mall",
      tag: "PEER GUIDED SHOPPING.",
      detail:
        "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
