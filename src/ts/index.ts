import TooltipController from './controllers/tooltip';
import ExperienceController from './controllers/experience';

const init = () => {
    ExperienceController();
    TooltipController();
};

window.onload = init;
