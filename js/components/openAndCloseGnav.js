export const openAndCloseGnav = () => {
  const gnavButton = document.getElementById('js-gnav-btn');
  const gnavSp = document.getElementById('js-gnav-sp');
  const gnavCloseBtn = document.getElementById('js-gnav-close-btn');
  const openNav = () => {
    gnavSp.classList.add('show');
  }
  const closeNav = () => {
    gnavSp.classList.remove('show');
  }

  gnavButton.addEventListener('click', openNav);
  gnavCloseBtn.addEventListener('click', closeNav);
}
