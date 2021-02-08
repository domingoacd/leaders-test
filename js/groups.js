import activateGroupsCarousel from './groupsCarousel.js';
import activateCreateGroup from './groupsCreateGroup.js';
import activateSideBar from './sidebar.js';
import activateMobileNavBar from './navbar.js';

const startHomeFunctionalities = (e) => {
  activateSideBar();
  activateMobileNavBar();
  activateGroupsCarousel();
  activateCreateGroup();
};

window.addEventListener('load', startHomeFunctionalities);
