import { Storage } from '../utils';

const getThemeIcon = (theme: string) => {
    const icon = theme === 'light' ? 'sun' : 'moon';
    return `fas fa-${icon}`;
};

const ThemeController = () => {
    const root = document.documentElement;
    const toggleButton: HTMLInputElement = document.querySelector('#theme-toggle')!;
    const themeIcon: HTMLElement = document.querySelector('#theme-icon')!;

    const toggleOnChange = (event: Event) => {
        const eventTarget = event.target as HTMLInputElement;
        const currentTheme = eventTarget.checked ? 'dark' : 'light';

        root.setAttribute('data-theme', currentTheme);
        Storage.setTheme(currentTheme);

        themeIcon.className = getThemeIcon(currentTheme);
    };

    const init = () => {
        const themeSelected = Storage.getTheme();

        root.setAttribute('data-theme', themeSelected);

        toggleButton.addEventListener('change', toggleOnChange);
        toggleButton.checked = themeSelected === 'dark';

        themeIcon.className = getThemeIcon(themeSelected);
    };

    return init;
};

export default ThemeController();
