
const header = document.createElement('h1');
header.classList.add('text-2xl', 'uppercase');
header.innerText = 'Tailwind JIT test repo';

const container = document.createElement('div');
container.classList.add('container', 'py-5', 'mx-auto');

container.appendChild(header);

document.body.appendChild(container);
