import activateSuggestionsButtons from './homeSuggestions.js';
import activatePublishFunctionality from './homePublishPosts.js';
import activateSideBar from './sidebar.js';
import activateMobileNavBar from './navbar.js';

const startHomeFunctionalities = (e) => {
  const publishPostInput = document.getElementById('publish-post-input');

  function handlePostInput(e) {
    publishPostInput.classList.add('active');
  }
  publishPostInput.addEventListener('click', handlePostInput);
  activateSideBar();
  activateMobileNavBar();
  activateSuggestionsButtons();
  activatePublishFunctionality();
};

window.addEventListener('load', startHomeFunctionalities);
