const searchInput = document.querySelector('.search-skills');

const filterProjectsBySkill = (query, matchedSkills) => {
    return projects.filter(
        ({ skills }) => {
            const validSkills = skills.filter((skill) => skill.toLocaleLowerCase().startsWith(query));
            validSkills.forEach(matchedSkills.add, matchedSkills);
            return validSkills.length !== 0;
        }
    );
}

const getProjectData = (query) => {
    const matchedSkills = new Set();
    const normalizedQuery = query.toLocaleLowerCase();
    const filteredProjects = query === ''
        ? projects
        : filterProjectsBySkill(normalizedQuery, matchedSkills);
    console.log(matchedSkills);
    return {
        projects: filteredProjects.length === 0
            ? projects
            : filteredProjects,
        extraData: {
            matchedSkills,
        },
    }
}

const debounce = (func, ms = 250) => {
    let timerID = 0;
    return (...args) => {
        clearTimeout(timerID);
        timerID = setTimeout(func.bind(this, ...args), ms);
    }
}

const searchKeyUp = (event) => {
    const { value: query } = event.target;
    clearProjectCards();
    addProjectCards(getProjectData(query));
}

searchInput.addEventListener('keyup', debounce(searchKeyUp));
