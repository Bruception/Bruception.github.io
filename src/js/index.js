import ProjectController from './controllers/project';
import CopyrightController from './controllers/copyright';

const init = () => {
    ProjectController();
    CopyrightController();
}

window.onload = init;
