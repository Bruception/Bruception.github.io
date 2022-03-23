import { projects } from '../data/projects';
import { debounce, TextIndex } from '../utils';
import { ProjectCard } from '../components/project-card';

const ProjectController = () => {
    const searchInput: HTMLElement = document.querySelector('#search')!;
    const cardContainer: HTMLElement = document.querySelector('#project-cards')!;

    const projectTextIndex = TextIndex<Project>(projects, (project) => {
        const { title, subTitle, description, skills } = project;
        return `${title} ${subTitle} ${description} ${skills.join(' ')}`;
    });

    const clearProjectCards = () => {
        cardContainer.innerHTML = '';
    };

    const addProjectCards = (newProjects: Project[], matchedText: string[] = []) => {
        const projectsToMap = newProjects.length === 0 ? projects : newProjects;

        projectsToMap.map((project) => {
            cardContainer.appendChild(ProjectCard(project, matchedText));
        });
    };

    const searchKeyUp = (event: KeyboardEvent) => {
        const { value: query } = event.target as HTMLInputElement;
        const { results, matchedQueryTerms } = projectTextIndex.search(query);

        clearProjectCards();
        addProjectCards(results, matchedQueryTerms);
    };

    const init = () => {
        addProjectCards(projects);
        searchInput.addEventListener('keyup', debounce(searchKeyUp));
    };

    return init;
};

export default ProjectController();
