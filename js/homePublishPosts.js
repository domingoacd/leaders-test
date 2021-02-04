const activatePublishFunctionality = () => {
  const allPublishButtons = document.querySelectorAll('.j-publish-btn');
  let currentOptionActive = document.querySelector('.j-publish-btn.active');

  const setNewActiveButton = (newActiveButton) => {
    currentOptionActive.classList.remove('active');
    newActiveButton.classList.add('active');

    currentOptionActive = newActiveButton;
  };

  const displayChosenOption = (selectedPublishOption) => {
    const currentPublishDisplayed = document.querySelector(
      '.j-publish-post.show'
    );
    const publishToDisplay = document.querySelector(
      `.j-publish-post[data-publishpost="${selectedPublishOption}"]`
    );

    currentPublishDisplayed.classList.remove('show');
    publishToDisplay.classList.add('show');
  };
  function showPublishOption(e) {
    let selectedPublishOption = this.dataset.publishbtn;

    if (!currentOptionActive.isEqualNode(this)) {
      setNewActiveButton(this);
      displayChosenOption(selectedPublishOption);
    }
  }

  allPublishButtons.forEach((button) =>
    button.addEventListener('click', showPublishOption)
  );
};

export default activatePublishFunctionality;
