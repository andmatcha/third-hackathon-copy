window.addEventListener("scroll", scroll);

const mainContentsSpacer = document.getElementById('mainContentsSpacer');
const mainContent1 = document.getElementById('mainContent1');
const mainContent2 = document.getElementById('mainContent2');
const mainContent3 = document.getElementById('mainContent3');
const oddImages = document.querySelectorAll('.main_contents_wrapper img:nth-of-type(odd)');
const evenImages = document.querySelectorAll('.main_contents_wrapper img:nth-of-type(even)');
// ページの上端から、要素の上端までの距離
const contentsTopY = window.pageYOffset + mainContentsSpacer.getBoundingClientRect().top ;

function scroll() {
    const scrollPosition = window.pageYOffset;
    //１個目
    if (scrollPosition < contentsTopY) { //先頭から
        mainContent1.classList.remove('fix_box');
    } else if (scrollPosition >= contentsTopY && scrollPosition < contentsTopY + 500) { //１個目固定している間
        mainContent1.classList.remove('transform_box');
        mainContent1.classList.add('fix_box'); //１個目 大タイトル 固定
        oddImages[0].classList.remove('show_odd_images');
        evenImages[0].classList.remove('show_even_images');
    } else { //１個目見せてる時
        mainContent1.classList.add('transform_box'); //１個目 大タイトル
        oddImages[0].classList.add('show_odd_images');
        evenImages[0].classList.add('show_even_images');
    }

    //２個目
    if (scrollPosition < contentsTopY + 2000) {
        mainContent2.classList.remove('fix_box');
    } else if (scrollPosition >= contentsTopY + 2000 && scrollPosition < contentsTopY + 2500) {
        mainContent2.classList.remove('transform_box');
        mainContent2.classList.add('fix_box');
        oddImages[1].classList.remove('show_odd_images');
        evenImages[1].classList.remove('show_even_images');
    } else {
        mainContent2.classList.add('transform_box');
        oddImages[1].classList.add('show_odd_images');
        evenImages[1].classList.add('show_even_images');
    }

    //３個目
    if (scrollPosition < contentsTopY + 4000) {
        mainContent3.classList.remove('fix_box');
    } else if (scrollPosition >= contentsTopY + 4000 && scrollPosition < contentsTopY + 4500) {
        mainContent3.classList.remove('transform_box');
        mainContent3.classList.add('fix_box');
        oddImages[2].classList.remove('show_odd_images');
        evenImages[2].classList.remove('show_even_images');
    } else {
        mainContent3.classList.add('transform_box');
        oddImages[2].classList.add('show_odd_images');
        evenImages[2].classList.add('show_even_images');
    }
}