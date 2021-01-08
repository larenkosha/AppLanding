function random(min, max) {
    let num = Math.random() * (max - min) + min;
    
    return Math.round(num);
}

function rotate(arr, count) {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
}

function createShadowCardLists() {
    let ratios = [ 0.23, 0.19, 0.32, 0.26, 0.3, 0.12, 0.21, 0.25, 0.16, 0.09, 0.12, 0.22, 0.14, 0.31, 0.18 ];

    ratios = rotate(ratios, random(0, ratios.length));

    let cardList = document.querySelector(".card-list");
    let shadowBackground = document.querySelector(".shadow-background");
    let leftsUntilNow = 0;

    while (leftsUntilNow < window.innerWidth) {
        for (let i = 0; i < ratios.length; i++) {
            if (leftsUntilNow > window.innerWidth) return;

            let shadowList = cardList.cloneNode(true);

            shadowList.className = "shadow-list";
            shadowList.style.transform = "scale(" + ratios[i] + ")";
            shadowList.style.zIndex = ratios[i] * 100;
            shadowList.style.left = leftsUntilNow + "px";
            leftsUntilNow += 1024 * ratios[i] - random(60, 140);

            shadowBackground.appendChild(shadowList);
        }
    }
}

function getCardTitlesMargins(card) {
    let title = card.querySelector(".title");
    let style = title.currentStyle || window.getComputedStyle(title);

    return (
        parseInt(style.marginTop) +
        parseInt(style.marginBottom) +
        title.offsetHeight
    );
}

function pushCardTitleDown(card, measure) {
    let title = card.querySelector(".title");
    title.style.transform = "translateY(" + measure + "px)";
}

function cardParallax(card) {
    let windowHeight = window.innerHeight;
    let cardHeight = card.offsetHeight - getCardTitlesMargins(card);
    let cardStartPosition = card.offsetTop;
    let distanceTraveledInWindow = window.scrollY + windowHeight - cardStartPosition;

    if (distanceTraveledInWindow > windowHeight) return;

    pushCardTitleDown(card, (distanceTraveledInWindow * cardHeight) / windowHeight);
}

function cardIsInView(card) {
    let scrollDistance = window.scrollY;
    let windowHeight = window.innerHeight;
    let cardHeight = card.offsetHeight;
    let cardCheckpoint = card.offsetTop;

    return (scrollDistance + windowHeight >= cardCheckpoint && scrollDistance < cardCheckpoint + cardHeight);
}

function manageScrolling() {
    let allCards = document.querySelectorAll(".card");

    allCards.forEach(function (card) {
        if (cardIsInView(card)) { cardParallax(card) }
    });
}

window.addEventListener("scroll", manageScrolling);
window.addEventListener("load", manageScrolling);
window.addEventListener("load", createShadowCardLists);