

const showSideBar = (e) => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay')

  sideBar.classList.add('show')
  overlay.classList.add('show')

  document.body.classList.add('showing-overlay');
}

const hideSideBar = (e) => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay')

  sideBar.classList.remove('show')
  overlay.classList.remove('show')

  document.body.classList.remove('showing-overlay');
}

const attachSideProfileEvent = () => {
  const showSideBarBtn = document.querySelector('.j-open-side-profile');
  const hideSideBarBtn = document.querySelector('.j-close-side-profile');

  showSideBarBtn?.addEventListener('click', showSideBar);
  hideSideBarBtn?.addEventListener('click', hideSideBar);
}

const startTestFunctionalities = () => {
  attachSideProfileEvent()
}
window.addEventListener('load', startTestFunctionalities);