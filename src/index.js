const cardClassList = ['col-lg-4', 'col-md-6'];
const commonIconClassList = ['project-link-icon', 'fa-lg'];
const githubIconClassList = [...commonIconClassList, 'fab', 'fa-github'];
const demoIconClassList = [...commonIconClassList, 'fas', 'fa-play-circle'];
const newsIconClassList = [...commonIconClassList, 'fas', 'fa-newspaper'];
const skillClassList = ['skill', 'rounded-pill'];

const iconClassMap = {
  git: githubIconClassList,
  demo: demoIconClassList,
  news: newsIconClassList,
};

const projects = [
  {
    title: 'Handwritten Digit Classifier',
    subTitle: 'Machine Learning',
    cardImage: 'images/network.png',
    description: 'A tool that lets users visualize\
      and interact with a neural network.',
    skills: ['LÖVE2D', 'Lua'],
    links: [
      'https://github.com/Bruception/digit-classifier-love',
    ],
  },
  {
    title: 'Pathfinding Visualizer',
    subTitle: 'Web Application',
    cardImage: 'images/path.png',
    description: 'A web app that lets users visualize\
      common pathfinding algorithms.',
    skills: ['JavaScript', 'HTML', 'CSS'],
    links: [
      'https://github.com/Bruception/pathfinding-visualizer',
      '/pathfinding-visualizer:demo'
    ],
  },
  {
    title: 'Graphing Calculator',
    subTitle: 'Desktop Application',
    cardImage: 'images/calculator.png',
    description: 'A graphing calculator capable of graphing any function and\
      approximating bounded integrals.',
    skills: ['LÖVE2D', 'Lua'],
    links: [
      'https://github.com/Arturoo0/GraphingCalculator',
    ],
  },
  {
    title: 'CovidSync',
    subTitle: 'Web Application',
    cardImage: 'images/covidsync.png',
    description: 'An application that integrates various APIs and services\
      to provide crucial resources for the Spanish-speaking and bilingual\
      communities about COVID-19. Won 2nd place in PantherHacks 2020.',
    skills: ['React', 'NodeJS', 'Express', 'Firestore'],
    links: [
      'https://github.com/FultonG/CovidSync',
      'http://panthernow.com/2020/07/20/pantherhacks-2020-seeks-to-foster-innovation/:news'
    ],
  },
];

const genericAction = (data, targetClass, parent) => {
  const targetElement = parent.querySelector(targetClass);
  targetElement.innerText = data;
}

// no colon at all, http:, https:
const invalidColonIndices = [-1, 4, 5];

const getLinkData = (link) => {
  const iconTypeBegin = link.lastIndexOf(':');
  const isMissingType = invalidColonIndices.includes(iconTypeBegin);
  const url = isMissingType ? link : link.substring(0, iconTypeBegin);
  const iconType = link.substring(iconTypeBegin + 1);
  const selectedIconClass = iconClassMap[iconType]
    ? iconClassMap[iconType]
    : githubIconClassList;
  return {
    url,
    iconClass: selectedIconClass,
  };
}

const projectTemplate = {
  title: {
    targetClass: '.project-name',
  },
  subTitle: {
    targetClass: '.project-type',
  },
  cardImage: {
    targetClass: '.card-img-top',
    action: (data, targetClass, parent) => {
      const cardImage = parent.querySelector(targetClass);
      cardImage.setAttribute('src', data);
    }
  },
  description: {
    targetClass: '.project-detail',
  },
  skills: {
    targetClass : '.project-skills',
    action: (skills, targetClass, parent) => {
      const projectSkills = parent.querySelector(targetClass);
      skills.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.classList.add(...skillClassList);
        skillSpan.innerText = skill;
        projectSkills.appendChild(skillSpan);
      });
    },
  },
  links: {
    targetClass: '.project-links',
    action: (links, targetClass, parent) => {
      const projectLinks = parent.querySelector(targetClass);
      links.forEach(link => {
        const linkIcon = document.createElement('a');
        const { url, iconClass } = getLinkData(link);
        linkIcon.classList.add(...iconClass);
        linkIcon.setAttribute('href', url);
        projectLinks.appendChild(linkIcon);
      });
    },
  },
};

const cardTemplate =
`<div class="card project shadow">
  <img class="card-img-top" src="" alt="project image">
  <div class="card-body">
    <h2 class="project-name"></h2>
    <h3 class="project-type"></h3>
    <p class="project-detail"></p>
    <div class="project-skills"></div>
    <div class="project-links"></div>
  </div>
</div>`

const buildProjectCard = (project) => {
  const card = document.createElement('div');
  card.classList.add(...cardClassList);
  card.innerHTML = cardTemplate;
  Object.keys(project).forEach(prop => {
    if (!projectTemplate[prop]) return;
    const { targetClass, action } = projectTemplate[prop];
    const selectedAction = !!action ? action : genericAction;
    selectedAction(project[prop], targetClass, card);
  });
  return card;
}

const addProjectCards = () => {
  const projectCards = projects.map(project => buildProjectCard(project));
  const row = document.querySelector('.row');
  projectCards.forEach(card => row.appendChild(card));
}

const setCopyrightText = () => {
  const copyright = document.querySelector('.footer-text');
  const currentYear = new Date().getFullYear();
  copyright.innerText = `© ${currentYear} Bruce Berrios`;
}

window.onload = () => {
  addProjectCards();
  setCopyrightText();
}
