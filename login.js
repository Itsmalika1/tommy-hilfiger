//LOGIN & REGISTER BTN
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-350px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-560px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += "white-btn";
  x.style.opactiy = 0;
  y.style.opacity = 1;
}
