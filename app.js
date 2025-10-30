const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon'
const themeBtn = document.querySelector('#toggleTheme');
const knob = document.querySelector('.knob');
const searchInput = document.querySelector('#searchInput');
const loadingScreen = document.querySelector('#loading');
const TOTAL = document.querySelector('#loading');

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchAllPokemonData() {
    const requests = [];
    for (let i = 1; i <= TOTAL; i++) {
        const req = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => {
                if (!res.ok){
                    throw new Error('Error requesting the pokemon ' + i + ': ' + res.status);
                }
                return res.json();
            })
            .then(data => {
                return {
                    id: i,
                    name: capitalize(data.name),
                    sprite: `${baseURL}${i}.png`
                };
            })
            .catch(err => {
                console.error('Fallo obteniendo el pokemon', i, err);
                return {
                    id: i,
                    name: '(error)',
                    sprite: `${baseURL}${i}.png`
                };
            });
        requests.push(req);
    }
    const results = await Promise.all(requests);
    return results;
}