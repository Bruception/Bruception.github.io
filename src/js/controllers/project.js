import projects from '../data/projects';
import ProjectCard from '../components/project-card';
import { debounce, SearchService } from '../utils';

const ProjectController = () => {
    const searchInput = document.querySelector('#search');
    const cardContainer = document.querySelector('.row');

    const searchService = SearchService(projects, (project) => {
        const { title, subTitle, description, skills } = project;
        return `${title} ${subTitle} ${description} ${skills.join(' ')}`;
    });

    const clearProjectCards = () => {
        cardContainer.innerHTML = '';
    };

    const addProjectCards = (newProjects, matchedText) => {
        if (newProjects.length === 0) {
            newProjects = projects;
        }

        newProjects.map((project) => {
            cardContainer.appendChild(ProjectCard(project, matchedText));
        });
    };

    const searchKeyUp = (event) => {
        const { value: query } = event.target;
        const { results, matchedQueryTerms } = searchService.query(query);
        clearProjectCards();
        addProjectCards(results, matchedQueryTerms);
    };

    const init = () => {
        addProjectCards(projects, []);
        searchInput.addEventListener('keyup', debounce(searchKeyUp));
    };

    return init;
}

export default ProjectController();
