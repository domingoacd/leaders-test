const activateMobileSideNav = () => {
  const sideMenu = document.getElementById('sidemenu');
  const overlay = document.querySelector('.j-overlay');
  const showSideMenuBtn = document.querySelector('.j-open-sidemenu');
  const hideSideMenuBtn = document.querySelector('.j-close-sidemenu');

  const showSideMenu = (e) => {
    sideMenu.classList.add('show');
    overlay.classList.add('show');

    document.body.classList.add('showing-overlay');
  };

  const hideSideMenu = (e) => {
    sideMenu.classList.remove('show');
    overlay.classList.remove('show');

    document.body.classList.remove('showing-overlay');
  };

  showSideMenuBtn.addEventListener('click', showSideMenu);
  hideSideMenuBtn.addEventListener('click', hideSideMenu);
};

export default activateMobileSideNav;
