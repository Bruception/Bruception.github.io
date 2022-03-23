const PROJECT_CARD_CLASS_LIST = ['col-lg-4', 'col-md-6'];

const PROJECT_LINK_CLASS_MAP: { [key in ValidLinkType]: string[] } = {
    'source-code': ['fab', 'fa-github'],
    demo: ['fas', 'fa-play-circle'],
    news: ['fas', 'fa-newspaper'],
};

const PROJECT_LINK_DESCRIPTION: { [key in ValidLinkType]: string } = {
    'source-code': 'See source code',
    demo: 'See demo',
    news: 'See news',
};

const highlightMatches = (text: string, matchedText: string[]) => {
    const words = text.split(' ');

    const normalizedWords = words.map((word) => {
        const shouldHighlight = matchedText.find((match) => {
            return word.startsWith(match);
        });
        return shouldHighlight ? `<span class="keyword-match">${word}</span>` : word;
    });

    return normalizedWords.join(' ');
};

const ProjectLink = ({ type, uri }: Link) => {
    const linkClasses = PROJECT_LINK_CLASS_MAP[type].join(' ');
    const tooltipText = PROJECT_LINK_DESCRIPTION[type];

    return `<a class="project-link-icon fa-lg ${linkClasses}" href="${uri}" title="${tooltipText}"></a>`;
};

const ProjectSkill = (skill: string, matchedText: string[]) => {
    const skillSelected = matchedText.includes(skill) && 'skill-selected';
    return `<span class="skill rounded-pill skill-normal ${skillSelected}">${skill}</span>`;
};

export const ProjectCard = (projectData: Project, matchedText: string[]) => {
    const { title, subTitle, cardImage, description, skills, links } = projectData;

    const projectSkills = skills.map((skill) => ProjectSkill(skill, matchedText));
    const projectLinks = links.map((link) => ProjectLink(link));

    const cardTemplate = `<div class="card project shadow">
            <img class="card-img-top" src="${cardImage}" alt="project image">
            <div class="card-body">
                <h2 class="project-name">${highlightMatches(title, matchedText)}</h2>
                <h3 class="project-type">${highlightMatches(subTitle, matchedText)}</h3>
                <p class="project-detail">${highlightMatches(description, matchedText)}</p>
                <div class="project-skills">${projectSkills.join('')}</div>
                <div class="project-links">${projectLinks.join('')}</div>
            </div>
        </div>`;

    const projectCard: HTMLElement = document.createElement('div');
    projectCard.classList.add(...PROJECT_CARD_CLASS_LIST);
    projectCard.innerHTML = cardTemplate;

    return projectCard;
};
