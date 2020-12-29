const setCopyrightText = () => {
    const copyright = document.querySelector('.footer-text');
    const currentYear = new Date().getFullYear();
    copyright.innerText = `© ${currentYear} Bruce Berrios`;
}

const defaultProjectData = {
    projects,
    extraData: {
        matchedSkills: new Set(),
    },
}

window.onload = () => {
    addProjectCards(defaultProjectData);
    setCopyrightText();
}
