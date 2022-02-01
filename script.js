let name;
name = prompt("Lütfen adınızı giriniz.");
console.log(name);
let title = document.querySelector("#myName");
title.innerHTML = name;
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var d = date.getDay();
  var month = date.getMonth();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  if (d == 1) {
    d = "Pazartesi";
  } else if (d == 2) {
    d = "Salı";
  } else if (d == 3) {
    d = "Çarşamba";
  } else if (d == 4) {
    d = "Perşembe";
  } else if (d == 5) {
    d = "Cuma";
  } else if (d == 6) {
    d = "Cumartesi";
  } else if (d == 0) {
    d = "Pazar";
  }

  var time = h + ":" + m + ":" + s + " " + d;
  document.getElementById("myClock").innerText = time;
  if (month == 1 || month == 2 || month == 12) {
    let add = (document.querySelector("#resim1").src = "screen-0.jpg");
  }
  if (month == 3 || month == 4 || month == 5) {
    let add = (document.querySelector("#resim1").src = "maxresdefault.jpg");
  }
  if (month == 6 || month == 7 || month == 8) {
    let add = (document.querySelector("#resim1").src = "summer.jpg");
  }
  if (month == 9 || month == 10 || month == 11) {
    let add = (document.querySelector("#resim1").src = "1455983.jpg");
  }

  setTimeout(showTime, 1000);
}

showTime();
