import tippy from 'tippy.js';

const init = () => {
    const elementsThatNeedTooltip = document.querySelectorAll('.tippyme');

    elementsThatNeedTooltip.forEach((element) => {
        const content = element.getAttribute('tooltip-text') ?? 'I forgot ¯_(ツ)_/¯';
        tippy(element, { content });

        element.toggleAttribute('tooltip-text');
        element.classList.toggle('tippyme');
    });
};

window.onload = init;
