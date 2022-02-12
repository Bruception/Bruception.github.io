import levenshtein from 'damerau-levenshtein';

export const debounce = (func, ms = 250) => {
    let timerID = 0;
    return (...args) => {
        clearTimeout(timerID);
        timerID = setTimeout(func.bind(this, ...args), ms);
    };
}

export const SearchService = (data, getSearchableText) => {
    const reverseIndex = {};
    const normalizedTokenToOriginal = {};

    const getTokens = (string) => {
        return string.match(/[a-zA-Z0-9]+/g) || [];
    };

    data.forEach((element) => {
        const tokens = getTokens(getSearchableText(element));
        tokens.forEach((token) => {
            const normalizedToken = token.toLocaleLowerCase();
            normalizedTokenToOriginal[normalizedToken] = token;

            if (!(normalizedToken in reverseIndex)) {
                reverseIndex[normalizedToken] = new Set();
            }

            reverseIndex[normalizedToken].add(element);
        });
    });

    const tokenSet = Object.keys(reverseIndex);

    const query = (searchQuery) => {
        const searchResult = {
            results: [],
            matchedQueryTerms: [],
        };

        const normalizedSearchQuery = getTokens(searchQuery.toLocaleLowerCase());
        if (normalizedSearchQuery.length === 0) {
            return searchResult;
        }

        const results = new Set();
        const matchedTokens = new Set();

        normalizedSearchQuery.forEach((searchToken) => {
            tokenSet.forEach((token) => {
                const { similarity } = levenshtein(token, searchToken);

                if (similarity >= 0.75 || token.startsWith(searchToken)) {
                    const matches = reverseIndex[token];
                    matchedTokens.add(normalizedTokenToOriginal[token]);
                    matches.forEach((match) => {
                        results.add(match);
                    });
                }
            });
        });

        searchResult.results = [...results];
        searchResult.matchedQueryTerms = [...matchedTokens];

        return searchResult;
    };

    return {
        query,
    };
}
