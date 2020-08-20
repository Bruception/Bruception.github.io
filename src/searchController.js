const searchInput = document.querySelector('.search-skills');

const filterProjectsBySkill = (query) => {
  const filteredProjects = projects.filter(
    ({ skills }) => skills.some(
      skill => skill.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
    )
  );
  return filteredProjects.length === 0 ? projects : filteredProjects;
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
  addProjectCards(filterProjectsBySkill(query));
}

searchInput.addEventListener('keyup', debounce(searchKeyUp));
