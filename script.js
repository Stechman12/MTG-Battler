async function searchCard() {
    const name = document.getElementById('cardName').value;
    const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`);
    const card = await response.json();

    if (card.object === 'error') {
        document.getElementById('result').innerHTML = 'Card not found.';
        return;
    }

    document.getElementById('result').innerHTML = `
        <h2>${card.name}</h2>
        <img src="${card.image_uris.normal}" alt="${card.name}">
    `;
}

async function randomCommander() {
    const query = encodeURIComponent('is:commander');
    const response = await fetch(`https://api.scryfall.com/cards/random?q=${query}`);
    const card = await response.json();

    if (card.object === 'error') {
        document.getElementById('result').innerHTML = 'Card not found.';
        return;
    }

    document.getElementById('result').innerHTML = `
        <h2>${card.name}</h2>
        <img src="${card.image_uris.normal}" alt="${card.name}">
    `;
}