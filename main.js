function copy() {
  navigator.clipboard.writeText("28232195");
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Zkopírováno ✔";
}
function mouseOut() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Kopírovat";
}
