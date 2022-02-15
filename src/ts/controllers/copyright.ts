const CopyrightController = () => {
    const currentYear = new Date().getFullYear();
    const copyright: HTMLElement = document.querySelector('.footer-text')!;

    const setCopyrightText = () => {
        copyright.innerText = `© ${currentYear} Bruce Berrios`;
    };

    return setCopyrightText;
};

export default CopyrightController();
