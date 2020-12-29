const cardClassList = ['col-lg-4', 'col-md-6'];
const commonIconClassList = ['project-link-icon', 'fa-lg'];
const githubIconClassList = [...commonIconClassList, 'fab', 'fa-github'];
const demoIconClassList = [...commonIconClassList, 'fas', 'fa-play-circle'];
const newsIconClassList = [...commonIconClassList, 'fas', 'fa-newspaper'];
const skillClassList = ['skill', 'rounded-pill'];
const skillNormalClassList = [...skillClassList, 'skill-normal'];
const skillSelectedClassList = [...skillClassList, 'skill-selected'];

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
    target.innerHTML = data;
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
        targetClass: '.project-skills',
        action: ({ data, matchedSkills }, target) => {
            data.forEach(skill => {
                const skillSpan = document.createElement('span');
                const skillClass = matchedSkills.has(skill)
                    ? skillSelectedClassList
                    : skillNormalClassList;
                skillSpan.classList.add(...skillClass);
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

const dataFormatTemplate = {
    skills: (primaryData, { matchedSkills }) => {
        return {
            data: primaryData,
            matchedSkills,
        };
    },
}

const buildProjectCard = (project, extraData) => {
    const card = document.createElement('div');
    card.classList.add(...cardClassList);
    card.innerHTML = cardTemplate;
    Object.keys(project).forEach(prop => {
        if (!projectTemplate[prop]) return;
        const { targetClass, action } = projectTemplate[prop];
        const dataFormat = dataFormatTemplate[prop];
        const data = dataFormat
            ? dataFormat(project[prop], extraData)
            : project[prop];
        actionWrapper(data, targetClass, card, action);
    });
    return card;
}

const clearProjectCards = () => {
    const row = document.querySelector('.row');
    row.innerHTML = '';
}

const addProjectCards = (projectData = defaultProjectData) => {
    const { projects, extraData } = projectData;
    const projectCards = projects.map(project => buildProjectCard(project, extraData));
    const row = document.querySelector('.row');
    projectCards.forEach(card => row.appendChild(card));
}
