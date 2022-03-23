import { keyBy } from '../utils';

const ExperiencePosition = (positionData: Position) => {
    const { title, description, duration } = positionData;
    const { startDate, endDate } = duration;

    const endDateString = !endDate ? 'Present' : endDate;

    const positionTemplate = `
        <div class="experience-position fade-in-fast">
            <div class="experience-position-title">${title}</div>
            <div class="experience-position-duration">${startDate} - ${endDateString}</div>
            <ul class="experience-position-description">
                ${description.map((descriptionDetail) => `<li>${descriptionDetail}</li>`).join('')}
            </ul>
        </div>
    `;

    const position: HTMLElement = document.createElement('div');
    position.classList.add('experience-position-container');
    position.innerHTML = positionTemplate;

    return position;
};

const OrganizationFilterItem = (
    organizationData: Experience['organization'],
    index: number,
    onChange: (name: string) => void,
) => {
    const { name, image } = organizationData;

    const organizationFilterItemTemplate = `
        <img class="organization-image-icon" src="${image}" alt="organization-image">
        <div class="organization-name">${name}</div>
    `;

    const organizationFilter: HTMLElement = document.createElement('div');
    organizationFilter.classList.add('experience-item');

    if (index === 0) {
        organizationFilter.classList.add('selected', 'shadow');
    }

    organizationFilter.innerHTML = organizationFilterItemTemplate;

    organizationFilter.addEventListener('click', () => {
        const selectedOrganizationFilter = document.querySelector('.experience-item.selected');
        if (selectedOrganizationFilter === organizationFilter) {
            return;
        }

        selectedOrganizationFilter && selectedOrganizationFilter.classList.remove('selected', 'shadow');

        organizationFilter.classList.add('selected', 'shadow');

        onChange(name);
    });

    return organizationFilter;
};

export const buildExperienceList = (experience: Experience[]) => {
    const experienceOrganizationFilter: HTMLElement = document.querySelector('#experience-organization-filter')!;
    const experienceListContainer: HTMLElement = document.querySelector('#experience-positions')!;

    const experienceGroupedByOrganization = keyBy(experience, ({ organization }) => organization.name);

    const showRelevantPositions = (name: string) => {
        experienceListContainer.innerHTML = '';

        const relevantExperience = experienceGroupedByOrganization.get(name)!;
        relevantExperience.positions.forEach((position) => {
            const positionElement = ExperiencePosition(position);
            experienceListContainer.appendChild(positionElement);
        });
    };

    experience.forEach(({ organization }, index) => {
        const organizationFilterItem = OrganizationFilterItem(organization, index, showRelevantPositions);
        experienceOrganizationFilter.appendChild(organizationFilterItem);
    });

    showRelevantPositions(experience[0].organization.name);
};
