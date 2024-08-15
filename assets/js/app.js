var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  // ! MENU ! //
  $(".btn__menu").click(function () {
    $(this).toggleClass("active");
    $(".menu__nav").toggleClass("active");
  });
  // ! MENU END ! //

  // ? MENU MOBILE ? //
  $("#menu__nav ul li a").click(function (e) {
    $("#menu__nav ul li a").removeClass("a__active");

    $(this).addClass("a__active");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
  // ? MENU MOBILE END ? //

  // * SCROLL REVEAL * //
  ScrollReveal().reveal("header", {
    duration: 2000,
    origin: "bottom",
    distance: "-15px",
  });
  ScrollReveal().reveal("main");
  ScrollReveal().reveal("#treatments", {
    duration: 2000,
    origin: "left",
    distance: "-20px",
  });
  ScrollReveal().reveal("#clinic", {
    duration: 2000,
    origin: "right",
    distance: "-30px",
  });
  ScrollReveal().reveal("#online-service");
  ScrollReveal().reveal("#attendance", {
    duration: 2000,
    origin: "right",
    distance: "-30px",
  });
  ScrollReveal().reveal(".footer");
  // * SCROLL REVEAL END * //

  // WhatsApp //
  function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
  }

  function showError(input, message) {
    return showMessage(input, message, false);
  }

  function showSuccess(input) {
    return showMessage(input, "", true);
  }

  function hasValue(input, message) {
    if (input.value.trim() === "") {
      return showError(input, message);
    }
    return showSuccess(input);
  }

  function validateEmail(input, requiredMsg, invalidMsg) {
    if (!hasValue(input, requiredMsg)) {
      return false;
    }
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    return true;
  }

  const NAME_REQUIRED = "Por favor, coloque seu nome.";
  const EMAIL_REQUIRED = "Por favor, coloque seu e-mail.";
  const MESSAGE_REQUIRED = "Por favor, coloque uma mensagem.";
  const EMAIL_INVALID = "Por favor, informe um endereÃ§o de e-mail vÃ¡lido.";

  const form = document.getElementById("form");

  function sendWhatsApp() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let messageValid = hasValue(form.elements["message"], MESSAGE_REQUIRED);
    let emailValid = validateEmail(
      form.elements["email"],
      EMAIL_REQUIRED,
      EMAIL_INVALID
    );

    if (nameValid && emailValid && messageValid) {
      var text = "Nome: " + name + "%0DEmail: " + email + "%0D%0D" + message;
      var url =
        "https://web.archive.org/web/20211222054732/https://api.whatsapp.com/send?phone=558399761639&text=" +
        text;
      window.open(url, "_blank");
    }
  }
  // WhatsApp //

  // carousel //
  $(".owl-carousel").owlCarousel({
    loop: false,
    autoHeight: true,
    autoplay: true,
    margin: 20,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    stagePadding: 10,
    responsiveClass: true,
    navText: [
      '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  // carousel end //

  $(".menu a").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 85,
      },
      500,
      "swing"
    );
  });
}
