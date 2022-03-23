declare type Project = {
    title: string;
    subTitle: string;
    cardImage: string;
    description: string;
    skills: string[];
    links: Link[];
};

declare type Position = {
    title: string;
    description: string[];
    duration: {
        startDate: string;
        endDate?: string;
    };
};

declare type Experience = {
    organization: {
        name: string;
        image: string;
    };
    positions: Position[];
};

declare type Link = {
    type: ValidLinkType;
    uri: string;
};

declare type ValidLinkType = 'source-code' | 'demo' | 'news';
