const searchInput = document.querySelector('.search-skills');

const filterProjectsBySkill = (query) => {
  const filteredProjects = projects.filter(
    ({ skills }) => skills.some(
      skill => skill.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
    )
  );
  return filteredProjects.length === 0 ? projects : filteredProjects;
}

const delay = (fn, ms) => {
  let timer = 0;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...args), ms || 0);
  }
}

const searchKeyUp = (event) => {
  const { value: query } = event.target;
  clearProjectCards();
  addProjectCards(filterProjectsBySkill(query));
}

searchInput.addEventListener('keyup', delay(searchKeyUp, 250));
