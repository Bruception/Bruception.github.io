const THEME_STORAGE_KEY = 'theme-selected';

const ThemeController = () => {
    const root = document.documentElement;
    const toggleButton: HTMLInputElement = document.querySelector('#theme-toggle')!;
    const themeText: HTMLElement = document.querySelector('#theme-text')!;

    const toggleOnChange = (event: Event) => {
        const eventTarget = event.target as HTMLInputElement;
        const currentTheme = eventTarget.checked ? 'dark' : 'light';

        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem(THEME_STORAGE_KEY, currentTheme);

        themeText.innerHTML = `${currentTheme} mode`;
    };

    const init = () => {
        const themeSelected = localStorage.getItem(THEME_STORAGE_KEY) ?? 'light';

        root.setAttribute('data-theme', themeSelected);

        toggleButton.addEventListener('change', toggleOnChange);
        toggleButton.checked = themeSelected === 'dark';

        themeText.innerHTML = `${themeSelected} mode`;
    };

    return init;
};

export default ThemeController();
