'use strict';

function modaltrueshirin() {

  document.querySelector(`[value='modalclose[1]']`).checked = true;

};

function modaltruejogai() {

  document.querySelector(`[value='modalclose[2]']`).checked = true;

};
function modaltruetonhoajie() {

  document.querySelector(`[value='modalclose[3]']`).checked = true;

};
function modaltrueninshal() {

  document.querySelector(`[value='modalclose[4]']`).checked = true;

};


window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".box");
  window.addEventListener("scroll", showBoxes);

  showBoxes();

  function showBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("zoom-up");
      } else {
        box.classList.remove("zoom-up");
      }
    });
  }
});
window.addEventListener("load", () => {

  const boxes = document.querySelectorAll(".box-opasity");
  window.addEventListener("scroll", showBoxes);

  showBoxes();

  function showBoxes() {
    const triggerBottom = (window.innerHeight / 6) * 5;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
