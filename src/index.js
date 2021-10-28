import './styles.css'

const tasks = [
  {
    description: 'Play Games',
    completed: false,
    index: 0
  },
  {
    description: 'Study JavaScript',
    completed: false,
    index: 1
  },
  {
    description: 'Sleep',
    completed: false,
    index: 2
  },
  {
    description: 'Hang out with girlfriend',
    completed: false,
    index: 3
  },
];

tasks.forEach((e) => {
  const template = document.createElement('template');
  template.innerHTML = `
  <li>
    <span class="material-icons show-default">check_box_outline_blank</span>
    <p contenteditable="true">${e.description}</p>
    <span class="material-icons more-info">more_vert</span>
  </li>`;
  document.querySelector('.items').appendChild(template.content);
});