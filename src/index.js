import './router';
import './styles.css';

const header = document.createElement('header');
header.innerHTML = `
      <h1>Client-side URL change examples</h1>
      <nav style="display: flex; justify-content: space-around">
        <a href="${BASENAME}/">Home</a>
        <a href="${BASENAME}/contacts">Contacts</a>
        <a href="${BASENAME}/about">About</a>
        <a href="${BASENAME}/about/us">About / Us</a>
      </nav>
`;

document.body.prepend(header);
