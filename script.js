async function searchCard() {
    const name = document.getElementById('cardName').value;
    const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`);
    const card = await response.json();

    if (card.object === 'error') {
        document.getElementById('searchResult').innerHTML = 'Card not found.';
        return;
    }

    document.getElementById('searchResult').innerHTML = `
        <img src="${card.image_uris.normal}" alt="${card.name}">
    `;
}

async function randomCommander() {
    const query = encodeURIComponent('is:commander');
    const response = await fetch(`https://api.scryfall.com/cards/random?q=${query}`);
    const card = await response.json();

    if (card.object === 'error') {
        document.getElementById('commanderResult').innerHTML = 'Card not found.';
        return;
    }

    document.getElementById('commanderResult').innerHTML = `
        <img src="${card.image_uris.normal}" alt="${card.name}">
    `;
}
async function randomColorCombo() {
    const colorCombos = ["White", "Blue", "Black", "Red", "Green", "Azorius (White, Blue)", "Dimir (Blue, Black)",
         "Rakdos (Red, Black)", "Gruul (Red, Green)", "Selesnya (Green, White)", "Orzhov (White Black)", "Izzet (Blue, Red)"
        , "Golgari (Black Green)", "Boros (Red, White)", "Simic (Green, Blue)", "Esper (White, Blue, Black)", "Grixis (Blue, Black, Red)"
        , "Jund (Black, Red, Green)", "Naya (Red, Green, White)", "Bant (Green, White, Blue)", "Abzan (White, Black Green)"
        , "Sultai (Black, Green, Blue)", "Temur (Green, Blue, Red)", "Jeskai (Blue, Red, White)", "Mardu (Red, White, Black)"
        , "Yore-Tiller (White, Blue, Black, Red)", "Glint-Eye (Blue, Black, Red, Green)", "Dune-Brood (Black, Red, Green, White)"
        , "Ink-Treader (Red, Green, White, Blue", "Witch-Maw (Green, White, Blue, Black)", "WUBRG (White, Blue, Black, Red, Green)"]

        const index = Math.floor(Math.random() * colorCombos.length)
        document.getElementById('colorResult').innerHTML = `
            <h2>${colorCombos[index]}</h2>
        `
        return;
}

async function randomCommanderColorCombo() {
    const colors = document.getElementById('colors').value;
    const query = encodeURIComponent('is:commander id=' + colors);
    const response = await fetch(`https://api.scryfall.com/cards/random?q=${query}`);
    const card = await response.json();

    if (card.object === 'error') {
        document.getElementById('commanderComboResult').innerHTML = 'Card not found.';
        return;
    }

    document.getElementById('commanderComboResult').innerHTML = `
        <img src="${card.image_uris.normal}" alt="${card.name}">
    `;
}
