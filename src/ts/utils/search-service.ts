import levenshtein from 'damerau-levenshtein';

interface ReverseIndex<T> {
    [key: string]: Set<T>;
}

interface TokenMap {
    [key: string]: Set<string>;
}

interface SearchResult<T> {
    results: T[];
    matchedQueryTerms: string[];
}

type TextExtractor<T> = (element: T) => string;

export const SearchService = <T>(data: T[], getSearchableText: TextExtractor<T>) => {
    const reverseIndex: ReverseIndex<T> = {};
    const normalizedTokenToOriginal: TokenMap = {};

    const getTokens = (text: string) => {
        return text.match(/[a-zA-Z0-9]+/g) || [];
    };

    data.forEach((element) => {
        const tokens = getTokens(getSearchableText(element));
        tokens.forEach((token) => {
            const normalizedToken = token.toLocaleLowerCase();

            if (!(normalizedToken in normalizedTokenToOriginal)) {
                normalizedTokenToOriginal[normalizedToken] = new Set<string>();
            }

            normalizedTokenToOriginal[normalizedToken].add(token);

            if (!(normalizedToken in reverseIndex)) {
                reverseIndex[normalizedToken] = new Set<T>();
            }

            reverseIndex[normalizedToken].add(element);
        });
    });

    const tokenSet = Object.keys(reverseIndex);

    const query = (searchQuery: string) => {
        const searchResult: SearchResult<T> = {
            results: [],
            matchedQueryTerms: [],
        };

        const normalizedSearchQuery = getTokens(searchQuery.toLocaleLowerCase());
        if (normalizedSearchQuery.length === 0) {
            return searchResult;
        }

        const results = new Set<T>();
        const matchedTokens = new Set<string>();

        normalizedSearchQuery.forEach((searchToken) => {
            tokenSet.forEach((token) => {
                const { similarity } = levenshtein(token, searchToken);

                if (similarity >= 0.75 || token.startsWith(searchToken)) {
                    const matches = reverseIndex[token];
                    matches.forEach((match) => {
                        results.add(match);
                    });
                    normalizedTokenToOriginal[token].forEach((originalToken) => {
                        matchedTokens.add(originalToken);
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
};
