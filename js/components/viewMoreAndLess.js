export const viewMoreAndLess = () => {
  // もっと見るボタンの操作
  // NOTE: viewmore と viewless でコンポーネント分割しても良さそう
  const hiddenContent = document.getElementById('js-hidden-content');
  const viewMoreBtn = document.getElementById('js-view-more-btn');
  const viewLessBtn = document.getElementById('js-view-less-btn');

  const viewMore = () => {
    hiddenContent.classList.add('show');
    viewMoreBtn.classList.remove('show');
    viewLessBtn.classList.add('show');
  }

  const viewLess = () => {
    hiddenContent.classList.remove('show');
    viewMoreBtn.classList.add('show');
    viewLessBtn.classList.remove('show');
  }

  viewMoreBtn.addEventListener('click', viewMore);
  viewLessBtn.addEventListener('click', viewLess);

}
