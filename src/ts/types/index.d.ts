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
