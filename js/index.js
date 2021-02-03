

const showSideBar = (e) => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay')

  sideBar.classList.add('show')
  overlay.classList.add('show')

  document.body.classList.add('showing-overlay');
}

const attachSideProfileEvent = () => {
  const showSideBarBtn = document.querySelector('.j-open-side-profile');

  showSideBarBtn?.addEventListener('click', showSideBar);
}

const startTestFunctionalities = () => {
  attachSideProfileEvent()
}
window.addEventListener('load', startTestFunctionalities);