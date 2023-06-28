'use strict';

function modaltrue1() {

  document.querySelector(`[value='modalclose[1]']`).checked = true;

};

function modaltrue2() {

  document.querySelector(`[value='modalclose[2]']`).checked = true;

};
function modaltrue3() {

  document.querySelector(`[value='modalclose[3]']`).checked = true;

};
function modaltrue4() {

  document.querySelector(`[value='modalclose[4]']`).checked = true;

};

// animation

window.addEventListener("load", () => {
  // boxをすべて取得
  const boxes = document.querySelectorAll(".box-sp");
  // scrollイベントをセット
  window.addEventListener("scroll", showBoxes);

  showBoxes();

  function showBoxes() {
    // 発火位置
    const triggerBottom = (window.innerHeight / 10) * 9;

    boxes.forEach((box) => {
      // boxの頭部分の座標を取得
      const boxTop = box.getBoundingClientRect().top;

      // boxの頭部分が発火位置を超えたら
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});

// $(document).ready(function () {
//   $('#open_Sec').on('click', function () {
//     $('#wrapper', '#Sec').toggleClass('show-shirin');
//   });
// });


// $(document).ready(function () {
//   $('#close_Sec').on('click', function () {
//     $('#Sec', '#wrapper').toggleClass('close-shirin');
//   });
// });