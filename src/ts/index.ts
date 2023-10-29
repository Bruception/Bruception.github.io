import tippy, { Props } from 'tippy.js';

const tooltipProfiles: Record<string, Partial<Props>> = {
    default: {},
    exclusive: {
        delay: 200,
        showOnCreate: true,
        placement: 'bottom',
    },
};

const init = () => {
    const elementsThatNeedTooltip = document.querySelectorAll('.tippyme');

    elementsThatNeedTooltip.forEach((element) => {
        const content = element.getAttribute('tooltip-text') ?? 'I forgot ¯_(ツ)_/¯';
        const type = element.getAttribute('tooltip-type') ?? 'default';

        tippy(element, { content, ...tooltipProfiles[type] });

        element.toggleAttribute('tooltip-text');
        element.classList.toggle('tippyme');
    });
};

window.onload = init;
