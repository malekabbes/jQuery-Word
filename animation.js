var display = "1";
function animation() {
  if (display == "1") {
    document.getElementById("5ra").innerHTML = "By Malek";
    display = "2";
  } else if (display == "2") {
    document.getElementById("5ra").innerHTML = "SIMPLE TEXT EDITOR";
    display = "3";
  } else if (display == "3") {
    display = "1";
  }
  console.log(display);
}
setInterval(animation, 700);
