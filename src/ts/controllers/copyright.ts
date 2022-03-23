const CopyrightController = () => {
    const currentYear = new Date().getFullYear();
    const copyright: HTMLElement = document.querySelector('.footer-text')!;

    const init = () => {
        copyright.innerText = `© ${currentYear} Bruce Berrios`;
    };

    return init;
};

export default CopyrightController();
