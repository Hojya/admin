function showSingleDiv(i) {
    const prevBlockEl = document.querySelector('.single.active');
    const currBlockEl = document.querySelector(i);
    if ( prevBlockEl === currBlockEl) return;
    prevBlockEl && prevBlockEl.classList.remove('active');
    currBlockEl.classList.add('active');
}