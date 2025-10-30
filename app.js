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