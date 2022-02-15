declare interface Project {
    title: string;
    subTitle: string;
    cardImage: string;
    description: string;
    skills: string[];
    links: Link[];
}

declare interface Link {
    type: ValidLinkType;
    uri: string;
}

declare type ValidLinkType = 'source-code' | 'demo' | 'news';
