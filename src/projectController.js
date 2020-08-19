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

const genericAction = (data, target) => {
  target.innerText = data;
}

const actionWrapper = (
  data,
  targetClass,
  parent,
  action = genericAction
) => {
  const target = parent.querySelector(targetClass);
  action(data, target);
};

const projectTemplate = {
  title: {
    targetClass: '.project-name',
  },
  subTitle: {
    targetClass: '.project-type',
  },
  cardImage: {
    targetClass: '.card-img-top',
    action: (data, target) => {
      target.setAttribute('src', data);
    }
  },
  description: {
    targetClass: '.project-detail',
  },
  skills: {
    targetClass : '.project-skills',
    action: (data, target) => {
      data.forEach(skill => {
        const skillSpan = document.createElement('span');
        skillSpan.classList.add(...skillClassList);
        skillSpan.innerText = skill;
        target.appendChild(skillSpan);
      });
    },
  },
  links: {
    targetClass: '.project-links',
    action: (data, target) => {
      data.forEach(link => {
        const linkIcon = document.createElement('a');
        const { url, iconClass } = getLinkData(link);
        linkIcon.classList.add(...iconClass);
        linkIcon.setAttribute('href', url);
        target.appendChild(linkIcon);
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
    actionWrapper(project[prop], targetClass, card, action);
  });
  return card;
}

const addProjectCards = () => {
  const projectCards = projects.map(project => buildProjectCard(project));
  const row = document.querySelector('.row');
  projectCards.forEach(card => row.appendChild(card));
}
