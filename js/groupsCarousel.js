const activateGroupsCarousel = () => {
  const carosulPaginationButtons = document.querySelectorAll('.j-group-p-btn');
  const showCarouselsButtons = document.querySelectorAll('.j-show-carousel-btn');

  function setActiveButton(e) {
    const currentActiveButton = document.querySelector(
      '.j-carousel-container.active .j-group-p-btn.active'
    );
      
    if (currentActiveButton.isEqualNode(this)) {
      e.preventDefault();
    } else {
      currentActiveButton.classList.remove('active');
      this.classList.add('active');
    }

  }

  function showCarousel(e) {
    const carouselId = this.dataset.showbtn;
    const carouselToShow = document.querySelector(`.j-carousel-container[data-carousel="${carouselId}"]`);
    const carouselTitleToShow = document.querySelector(
      `.j-carousel-title[data-cartitle="${carouselId}"]`
    );
    const currentCarousel = document.querySelector('.j-carousel-container.active');
    const currentCarouselTitle = document.querySelector('.j-carousel-title.active');

    if (!carouselToShow.classList.contains('active')) {
      currentCarousel.classList.remove('active');
      currentCarouselTitle.classList.remove('active');
      carouselToShow.classList.add('active');
      carouselTitleToShow.classList.add('active');
    }
  }

  carosulPaginationButtons.forEach(button => button.addEventListener('click', setActiveButton));
  showCarouselsButtons.forEach(button => button.addEventListener('click', showCarousel));
}

export default activateGroupsCarousel;