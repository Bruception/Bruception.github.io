import tippy from 'tippy.js';

const TooltipController = () => {
    const init = () => {
        const elementsThatNeedTooltip = document.querySelectorAll('.tippyme');

        elementsThatNeedTooltip.forEach((element) => {
            const content = element.getAttribute('tooltip-text') ?? '';
            tippy(element, { content });

            element.toggleAttribute('tooltip-text');
            element.classList.toggle('tippyme');
        });
    };

    return init;
};

export default TooltipController();
