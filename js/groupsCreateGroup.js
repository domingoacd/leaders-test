const activateCreateGroupBtn = () => {
  const openCreateButton = document.getElementById('open-create-group');
  const closeModalButton = document.querySelector('.j-close-modal');
  const createGroupBtn = document.getElementById('create-group');
  const groupCardTemplate = document.getElementById('group-card-template');
  const APIURL = '';

  function openCreateGroupModal(e) {
    const modal = document.querySelector('.j-modal');

    modal.classList.add('show');
  }
  function closeModal(e) {
    const modal = document.querySelector('.j-modal');

    modal.classList.remove('show');
  }

  function createNewPaginationWithNumber(columnsAmount) {
    const paginationContainer = document.querySelector(
      '.j-carousel-container[data-carousel="car-1"] .j-pagination'
    );
    const paginationAmount = paginationContainer.querySelectorAll(
      '.j-group-p-btn'
    ).length;
    if (paginationAmount !== columnsAmount) {
      const newPaginationElement = document.createElement('a');
      newPaginationElement.href = `#mygroup-col-${columnsAmount}`;
      newPaginationElement.classList.add(
        'group-pagination-btn',
        'j-group-p-btn'
      );
      paginationContainer.appendChild(newPaginationElement);

      console.log(document.querySelectorAll('.j-group-p-btn'));
    }
  }

  function insertCardIntoDocument(card) {
    const container = document.querySelector(
      '.j-carousel-container[data-carousel="car-1"]'
    );
    const carousel = container.querySelector(
      '.groups-content__cards-container__carousel'
    );
    const allCurrentCards = Array.from(
      carousel.querySelectorAll('.group-card')
    );
    const newAllCards = [card, ...allCurrentCards];
    let columnsCount = 0;
    let cardsCount = 1;
    let currentColumn = null;

    carousel.innerHTML = '';

    for (let current = 0; current < newAllCards.length; current++) {
      if (current % 3 === 0) {
        currentColumn = document.createElement('div');
        currentColumn.classList.add(
          'groups-content__cards-container__carousel__col'
        );
        currentColumn.id = `mygroup-col-${columnsCount+1}`;
        columnsCount++;
      }
      currentColumn.appendChild(newAllCards[current]);
      cardsCount++;
      if (cardsCount === 3) {
        carousel.appendChild(currentColumn);

        cardsCount = 1;
      }
    }

    createNewPaginationWithNumber(columnsCount);
  }

  function createNewGroupCard({ name, description }) {
    const node = groupCardTemplate.content.cloneNode(true);
    const groupCard = node.querySelector('.group-card');
    const cardTitle = groupCard.querySelector(
      '.group-card__information__group-name'
    );
    const cardDescription = groupCard.querySelector(
      '.groud-card__information__group-description'
    );

    cardTitle.textContent = name;
    cardDescription.textContent = description;

    insertCardIntoDocument(groupCard);
  }
  function saveInLocalStorage(data) {
    if (localStorage.getItem('groups')) {
      const oldGroups = JSON.parse(localStorage.getItem('groups'));
      localStorage.setItem(
        'groups',
        JSON.stringify({
          groups: [...oldGroups.groups, data],
        })
      );
    } else {
      localStorage.setItem(
        'groups',
        JSON.stringify({
          groups: [data],
        })
      );
    }

    createNewGroupCard(data);
  }

  function createGroup(e) {
    e.preventDefault();
    const data = {
      name: document.getElementById('create-group-name').value.trim(),
      description: document
        .getElementById('create-group-description')
        .value.trim(),
    };

    const formData = new FormData();

    for (const property in data) {
      formData.append(property, data[property]);
    }

    if (APIURL.length > 0) {
    } else {
      saveInLocalStorage(data);
    }

    closeModal();
  }

  openCreateButton.addEventListener('click', openCreateGroupModal);
  closeModalButton.addEventListener('click', closeModal);
  createGroupBtn.addEventListener('click', createGroup);
};

export default activateCreateGroupBtn;
