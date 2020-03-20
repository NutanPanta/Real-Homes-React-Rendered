// nav ko scroll ko lago js start
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $("nav").addClass("scrolltop");
  } else {
    $("nav").removeClass("scrolltop");
  }
});
// nav ko scroll ko lago js end



// login ko lagi js start
$("login-background").show();
$(".login-icon").click(function() {
  $("#login-background").toggle();
});

// responsive nav login start
// $("side_nav-login-background ").show();
$(".side_nav-login").click(function() {
  $("#side_nav-login-background ").toggle();
});
// responsive nav login end

// login ko lago js end

// Register ko lago js start
function openLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
}
function openRegister() {
  document.getElementById("register").style.display = "block";
  document.getElementById("login").style.display = "none";
}
// Register ko lago js end
// register local Storage start
let form = document.getElementById("Register");
var uname = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var rpassword = document.getElementById("repassword");

if (localStorage.RegisterDate === undefined) {
  localStorage.setItem("RegisterData", JSON.stringify([]));
}

let formData = JSON.parse(localStorage.getItem("RegisterData"));

function Register() {
  let toReturn;
  if (
    username.value == "" ||
    email.value == "" ||
    password.value == "" ||
    repassword.value == ""
  ) {
    console.log("Some field is missing");
    toReturn = false;
  } else {
    toReturn = true;
  }
  return toReturn;
}

form.addEventListener("submit", e => {
  e.preventDefault();

  if (Register()) {
    let data = {
      username: username.value,
      email: email.value,
      password: password.value,
      repassword: repassword.value
    };
    formData.push(data);
    localStorage.setItem("RegisterData", JSON.stringify(formData));
    e.target.reset();
  } else {
    alert("Some field is missing");
  }
});
// register local storage end

// search ko lagi js start
function openSlideSearch() {
  if (screen.width <= 750) {
    document.getElementById("form-a").style.width = "100%";
  } else {
    document.getElementById("form-a").style.width = "50%";
  }
}
function closeSlideSearch() {
  document.getElementById("form-a").style.width = "0";
}
// search ko lagi js end

// owl carousel js start
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1
      }
    }
  });
});
// owl carousel js end
