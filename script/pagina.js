const allCards = document.querySelectorAll('.card-item');
const Container = document.getElementById("Container");

function handleCardClick(event) {
    const clickedCard = event.currentTarget;

    Container.innerHTML = "";

    const cardClone = clickedCard.cloneNode(true);
    cardClone.classList.add('card-clicked');
    cardClone.classList.add('centered');
    Container.appendChild(cardClone);

    allCards.forEach(card => {
        card.style.display = 'none';
    });
}

allCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});



