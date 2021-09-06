for (let i = 5; i < 11; i++) {
    const popupBg = document.getElementById(`popup${i}`);
document.getElementById(`tile${i}`).addEventListener('click', () => {
    popupBg.classList.add('show_popup');
});

popupBg.addEventListener('click', () => {
    popupBg.classList.remove('show_popup');
});
}