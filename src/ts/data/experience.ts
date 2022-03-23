export const experience: Experience[] = [
    {
        organization: {
            name: 'Monkeytype',
            image: './static/images/monkeytype.png',
        },
        positions: [
            {
                title: 'Open Source Contributor',
                description: [
                    'Improved and expanded the existing API to follow RESTful conventions.',
                    'Assisted in the development of a new public API. Allowing users to access their data in third-party applications.',
                    'Developed an API to allow users to create and manage their API keys for the public API.',
                    'Helped in the development of an API client for the public API.',
                    'Created and improved various features in the web client.',
                ],
                duration: {
                    startDate: 'January 2022',
                },
            },
        ],
    },
    {
        organization: {
            name: 'Blend',
            image: './static/images/blend.png',
        },
        positions: [
            {
                title: 'Software Engineer Intern',
                description: [
                    "Assisted in the design and development of an API that would allow clients to update details of a borrower's loan product when changes are made in an external loan origination system.",
                    "This API would further improve the ease of integration with Blend's mortgage platform, and provide a seamless experience for borrowers.",
                ],
                duration: {
                    startDate: 'May 2021',
                    endDate: 'August 2021',
                },
            },
            {
                title: 'Software Engineer Intern',
                description: [
                    'Collaborated with a full-stack engineering team in charge of developing mission-critical features that help borrowers going through the mortgage process get pre-approved faster.',
                    'Contributed to the API of a microservice in charge of usability benchmarking for the loan application page.',
                    'Experienced agile software development methodologies emphasizing continuous delivery.',
                    'Wrote tests for all contributions and bug fixes using the unit testing framework Jest.',
                ],
                duration: {
                    startDate: 'May 2020',
                    endDate: 'August 2020',
                },
            },
        ],
    },
];
