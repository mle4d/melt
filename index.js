const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

var ogModal = document.getElementById("ogModal");
var ogbtn = document.getElementById("ogBtn");
var mintModal = document.getElementById("mintModal");
var mintbtn = document.getElementById("mintBtn");
var creepModal = document.getElementById("creepModal");
var creepbtn = document.getElementById("creepBtn");
var shortsModal = document.getElementById("shortsModal");
var shortsbtn = document.getElementById("shortsBtn");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

ogbtn.onclick = function() {
  ogModal.style.display = "block";
}
span.onclick = function() {
  ogModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == ogModal) {
    ogModal.style.display = "none";
  }
}
mintbtn.onclick = function() {
  mintModal.style.display = "block";
}
span2.onclick = function() {
  mintModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    mintModal.style.display = "none";
  }
}
creepbtn.onclick = function() {
  creepModal.style.display = "block";
}
span3.onclick = function() {
  creepModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    creepModal.style.display = "none";
  }
}
shortsbtn.onclick = function() {
  shortsModal.style.display = "block";
}
span4.onclick = function() {
  shortsModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    shortsModal.style.display = "none";
  }
}
