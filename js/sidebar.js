const activateSideBar = () => {
  const sideBar = document.getElementById('sidebar');
  const overlay = document.querySelector('.j-overlay');
  const showSideBarBtn = document.querySelector('.j-open-side-profile');
  const hideSideBarBtn = document.querySelector('.j-close-side-profile');

  const showSideBar = (e) => {

    sideBar.classList.add('show');
    overlay.classList.add('show');

    document.body.classList.add('showing-overlay');
  };

  const hideSideBar = (e) => {

    sideBar.classList.remove('show');
    overlay.classList.remove('show');

    document.body.classList.remove('showing-overlay');
  };

  showSideBarBtn.addEventListener('click', showSideBar);
  hideSideBarBtn.addEventListener('click', hideSideBar);
};

export default activateSideBar;
