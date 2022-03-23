import ThemeController from './controllers/theme';
import ProjectController from './controllers/project';
import CopyrightController from './controllers/copyright';
import ExperienceController from './controllers/experience';

const init = () => {
    ThemeController();
    ExperienceController();
    ProjectController();
    CopyrightController();
};

window.onload = init;
