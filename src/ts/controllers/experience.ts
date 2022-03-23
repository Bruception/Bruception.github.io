import { experience } from '../data/experience';
import { buildExperienceList } from '../components/experience-list';

const getDateTime = (date: string) => {
    return new Date(date).getTime();
};

const positionComparator = (a: Position, b: Position) => {
    const { startDate: aStartDate, endDate: aEndDate } = a.duration;
    const { startDate: bStartDate, endDate: bEndDate } = b.duration;

    const aStartDateTime = getDateTime(aStartDate);
    const bStartDateTime = getDateTime(bStartDate);

    const now = Date.now();

    const aEndDateTime = !aEndDate ? now : getDateTime(aEndDate);
    const bEndDateTime = !bEndDate ? now : getDateTime(bEndDate);

    if (aEndDateTime === bEndDateTime) {
        return bStartDateTime - aStartDateTime;
    }

    return bEndDateTime - aEndDateTime;
};

const ExperienceController = () => {
    const init = () => {
        experience.forEach((organizationExperience) => {
            const { positions } = organizationExperience;
            positions.sort((a, b) => positionComparator(a, b));
        });

        experience.sort((a, b) => {
            const { positions: aPositions } = a;
            const { positions: bPositions } = b;
            return positionComparator(aPositions[0], bPositions[0]);
        });

        buildExperienceList(experience);
    };

    return init;
};

export default ExperienceController();
