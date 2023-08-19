const Cards = document.querySelectorAll('.card-item');
const Container = document.getElementById("Container");
const BotaoVoltar = document.getElementById("BotaoVoltar");

function handleCardClick(event) {
    const clickedCard = event.currentTarget;

    Container.innerHTML = "";

    const cardClone = clickedCard.cloneNode(true);
    cardClone.classList.add('card-clicked');
    cardClone.classList.add('centered');
    Container.appendChild(cardClone);

    const largeImage = cardClone.querySelector('.imagem3');
    if (largeImage) {
        largeImage.style.maxHeight = '70vh'; 
    }

    const largeImage2 = cardClone.querySelector('.imagem4');
    if (largeImage2) {
        largeImage.style.maxHeight = '70vh'; 
    }

    Cards.forEach(card => {
        card.style.display = 'none';
    });

    BotaoVoltar.style.display = 'block';
}

function voltarParaCards() {
    Container.innerHTML = "";
    Cards.forEach(card => {
        card.style.display = 'block';
    });

    BotaoVoltar.style.display = 'none';
}

Cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});


