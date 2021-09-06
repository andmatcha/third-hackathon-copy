"use strict";
$(function () {
  $(".header_top").addClass("header_hover");
});
$(function () {
  $(".header_about").addClass("header_hover");
});
$(function () {
  $(".header_activity").addClass("header_hover");
});
$(function () {
  $(".header_faq").addClass("header_hover");
});


//入会の流れのアニメーション
$(function () {
  $(window).on("load scroll", function () {
    $(".top_entry_animation").each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass("active");
      }
    });
  });
});

//menuボタン
const menu = document.getElementById('menuContainer');
const hamburger = document.getElementById('menuBtn');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
  // menu.style.display="block";
});

//スクロール表示
window.addEventListener("scroll", scroll);
const menuBtn = document.getElementById('menuBtn');
const headerMenu = document.getElementById('headerMenu');
const fixedLineIcon = document.getElementById('fixedLineIcon');

function scroll() {
  const scrollPosition = window.pageYOffset;
  //hamburger btn
  if (scrollPosition > 100) {
    menuBtn.classList.add('is_show');
  } else {
    menuBtn.classList.remove('is_show');
  }
  //header menu
  if (scrollPosition < 60) {
    headerMenu.classList.add('is_show');
  } else {
    headerMenu.classList.remove('is_show');
  }
   //fixed line icon
   if (scrollPosition > 1000 && scrollPosition < 90000) {
    fixedLineIcon.classList.add('is_show');
  } else {
    fixedLineIcon.classList.remove('is_show');
  }
}

function fadeOut() {
  const loadingImg = document.getElementById('firstViewLoading');
  loadingImg.classList.add('loaded_img');
}
setTimeout(fadeOut, 2000);