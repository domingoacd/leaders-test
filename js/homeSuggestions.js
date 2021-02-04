const activateSuggestionsButtons = () => {
  const allSuggestionsButtons = document.querySelectorAll('.j-suggestion-btn');
  let currentActiveSuggestionButton = document.querySelector(
    '.j-suggestion-btn.active'
  );

  const setNewActiveButton = (newActiveButton) => {
    currentActiveSuggestionButton.classList.remove('active');
    newActiveButton.classList.add('active');

    currentActiveSuggestionButton = newActiveButton;
  };

  const displaySuggestionsChosen = (suggestionsChosen) => {
    const currentSuggestionsDisplayed = document.querySelector(
      '.j-suggestion-result.show'
    );
    const suggestionsToDisplay = document.querySelector(
      `.j-suggestion-result[data-suggestions="${suggestionsChosen}"]`
    );

    currentSuggestionsDisplayed.classList.remove('show');
    suggestionsToDisplay.classList.add('show')
  };

  function showSuggestions(e) {
    let suggestionsChosen = this.dataset.button;

    if (!currentActiveSuggestionButton.isEqualNode(this)) {
      setNewActiveButton(this);
      displaySuggestionsChosen(suggestionsChosen);
    }
  }
  allSuggestionsButtons.forEach((button) =>
    button.addEventListener('click', showSuggestions)
  );
};

export default activateSuggestionsButtons;
