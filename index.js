import { sum } from './sum.js';

document.querySelector('.app').innerHTML = `<h1>Env XX</h1><h2>${sum(19, 23)}</h2>`;
