type SiteTheme = 'light' | 'dark';

const SITE_THEME_KEY = 'theme-selected';

const Storage = () => {
    const storage = window.localStorage;

    const setTheme = (theme: SiteTheme) => {
        storage.setItem(SITE_THEME_KEY, theme);
    };

    const getTheme = (): SiteTheme => {
        const currentTheme = storage.getItem(SITE_THEME_KEY);

        const isNotValidTheme = currentTheme !== 'light' && currentTheme !== 'dark';
        if (isNotValidTheme) {
            setTheme('dark');
            return 'dark';
        }

        return currentTheme;
    };

    return {
        getTheme,
        setTheme,
    };
};

export default Storage();
