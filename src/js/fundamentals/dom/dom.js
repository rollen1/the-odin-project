const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

const p = document.createElement('p');
const h3 = document.createElement('h3');
p.textContent = `Hey I'm red!`;
p.style.color = 'red';
h3.textContent = `I'm a blue h3!`;
h3.style.color = 'blue';

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = '1px black solid';
div.style.backgroundColor = 'pink';

container.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div!`;
const p2 = document.createElement('p');
p2.textContent = `ME TOO!`;

div.appendChild(h1);
div.appendChild(p2);


