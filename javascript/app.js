// function calc(a) {}
function calc(b) {
  var a = document.getElementById("abc");
  a.value += b;
}
function result() {
  var c = document.getElementById("abc");
  c.value = eval(c.value);
}
function clr() {
  var d = document.getElementById("abc");
  d.value = "";
}
