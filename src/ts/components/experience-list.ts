import { keyBy } from '../utils';

const ExperiencePosition = (positionData: Position) => {
    const { title, description, duration } = positionData;
    const { startDate, endDate } = duration;

    const endDateString = !endDate ? 'Present' : endDate;

    const positionTemplate = `
        <div class="experience-position">
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

const ExperienceFilterItem = (
    organizationData: Experience['organization'],
    index: number,
    onChange: (name: string) => void,
) => {
    const { name, image } = organizationData;

    const experienceFilterItemContent = `
        <img class="organization-image-icon" src="${image}" alt="organization-image">
        <div class="organization-name">${name}</div>
    `;

    const experienceFilterItem: HTMLElement = document.createElement('div');
    experienceFilterItem.classList.add('experience-item');

    if (index === 0) {
        experienceFilterItem.classList.add('selected', 'shadow');
    }

    experienceFilterItem.innerHTML = experienceFilterItemContent;

    experienceFilterItem.addEventListener('click', () => {
        const selectedOrganizationFilter = document.querySelector('.experience-item.selected');
        if (selectedOrganizationFilter === experienceFilterItem) {
            return;
        }

        if (selectedOrganizationFilter) {
            selectedOrganizationFilter.classList.remove('selected', 'shadow');
        }

        experienceFilterItem.classList.add('selected', 'shadow');

        onChange(name);
    });

    return experienceFilterItem;
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
        const organizationFilterItem = ExperienceFilterItem(organization, index, showRelevantPositions);
        experienceOrganizationFilter.appendChild(organizationFilterItem);
    });

    experienceOrganizationFilter.addEventListener(
        'click',
        () => {
            const selectedOrganizationFilter = document.querySelector('.experience-item.selected');
            if (selectedOrganizationFilter) {
                const { left, width } = selectedOrganizationFilter.getBoundingClientRect();
                const selectedOrganizationFilterCenter = left + width / 2;

                experienceOrganizationFilter.scrollBy({
                    left: selectedOrganizationFilterCenter - window.innerWidth / 2,
                    behavior: 'smooth',
                });
            }
        },
        false,
    );

    showRelevantPositions(experience[0].organization.name);
};
