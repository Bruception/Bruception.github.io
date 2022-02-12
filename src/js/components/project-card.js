const PROJECT_CARD_CLASS_LIST = ['col-lg-4', 'col-md-6'];

const PROJECT_LINK_CLASS_MAP = {
    'source-code': ['fab', 'fa-github'],
    demo: ['fas', 'fa-play-circle'],
    news: ['fas', 'fa-newspaper'],
};

const highlightMatches = (text, matchedText) => {
    const words = text.split(' ');

    const normalizedWords = words.map((word) => {
        const shouldHighlight = matchedText.find((match) => {
            return word.startsWith(match);
        });
        return shouldHighlight ? `<span class="keyword-match">${word}</span>` : word;
    });

    return normalizedWords.join(' ');
};

const ProjectLink = ({ type, uri }) => {
    const linkClasses = PROJECT_LINK_CLASS_MAP[type].join(' ');
    return `<a class="project-link-icon fa-lg ${linkClasses}" href="${uri}"></a>`;
};

const ProjectSkill = (skill, matchedText) => {
    const skillSelected = matchedText.includes(skill) && 'skill-selected';
    return `<span class="skill rounded-pill skill-normal ${skillSelected}">${skill}</span>`;
};

const ProjectCard = (projectData, matchedText) => {
    const { title, subTitle, cardImage, description, skills, links } = projectData;

    const projectSkills = skills.map((skill) => ProjectSkill(skill, matchedText));
    const projectLinks = links.map((link) => ProjectLink(link));

    const cardTemplate = `<div class="card project shadow">
            <img class="card-img-top" src="${cardImage}" alt="project image">
            <div class="card-body">
                <h2 class="project-name">${highlightMatches(title, matchedText)}</h2>
                <h3 class="project-type">${highlightMatches(subTitle, matchedText)}</h3>
                <p class="project-detail">${highlightMatches(description, matchedText)}</p>
                <div class="project-skills">${projectSkills}</div>
                <div class="project-links">${projectLinks}</div>
            </div>
        </div>`;

    const projectCard = document.createElement('div');
    projectCard.classList.add(...PROJECT_CARD_CLASS_LIST);
    projectCard.innerHTML = cardTemplate;

    return projectCard;
};

export default ProjectCard;
