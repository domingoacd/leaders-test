import activateSuggestionsButtons from './homeSuggestions.js';

const showSideBar = (e) => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay');

  sideBar.classList.add('show');
  overlay.classList.add('show');

  document.body.classList.add('showing-overlay');
};

const hideSideBar = (e) => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay');

  sideBar.classList.remove('show');
  overlay.classList.remove('show');

  document.body.classList.remove('showing-overlay');
};

const attachSideProfileEvents = () => {
  const showSideBarBtn = document.querySelector('.j-open-side-profile');
  const hideSideBarBtn = document.querySelector('.j-close-side-profile');

  showSideBarBtn?.addEventListener('click', showSideBar);
  hideSideBarBtn?.addEventListener('click', hideSideBar);
};

const showSideMenu = (e) => {
  const sideMenu = document.getElementById('sidemenu');
  const overlay = document.querySelector('.j-overlay');

  sideMenu.classList.add('show');
  overlay.classList.add('show');

  document.body.classList.add('showing-overlay');
};

const hideSideMenu = (e) => {
  const sideMenu = document.getElementById('sidemenu');
  const overlay = document.querySelector('.j-overlay');

  sideMenu.classList.remove('show');
  overlay.classList.remove('show');

  document.body.classList.remove('showing-overlay');
};

const attachSideMenuEvents = () => {
  const showSideMenuBtn = document.querySelector('.j-open-sidemenu');
  const hideSideMenuBtn = document.querySelector('.j-close-sidemenu');

  showSideMenuBtn?.addEventListener('click', showSideMenu);
  hideSideMenuBtn?.addEventListener('click', hideSideMenu);
};

const startTestFunctionalities = () => {
  attachSideProfileEvents();
  attachSideMenuEvents();
  activateSuggestionsButtons()
};
window.addEventListener('load', startTestFunctionalities);
