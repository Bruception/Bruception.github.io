import ThemeController from './controllers/theme';
import ProjectController from './controllers/project';
import CopyrightController from './controllers/copyright';

const init = () => {
    ThemeController();
    ProjectController();
    CopyrightController();
};

window.onload = init;
