import { router } from './router';
import './styles.css';

const header = document.createElement('header');
header.innerHTML = `
      <h1>Client-side URL change examples</h1>
      <nav style="display: flex; justify-content: space-around">
        <a href="${router.makeUrl('/')}">Home</a>
        <a href="${router.makeUrl('/contacts')}">Contacts</a>
        <a href="${router.makeUrl('/about')}">About</a>
        <a href="${router.makeUrl('/about/us')}">About / Us</a>
      </nav>
`;

document.body.prepend(header);
