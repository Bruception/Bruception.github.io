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
                    'Implemented configurable real-time daily leaderboards using Redis.',
                    'Assisted in the development of a public API. Allowing users to access their data in third-party applications via generated API keys.',
                    'Overhauled and expanded the existing API to follow RESTful conventions.',
                    'Improved web client build times by 10x by migrating from Browserify to Webpack.',
                    'Setup a CI job on all pull requests using Github Actions to improve code stability.',
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
                    'Contributed to the API of a service used for automating the setup of complex loan application scenarios. This service is used by the user research team for usability testing.',
                    "Improved the Loan Cost Worksheet feature to meet customers' requirements. This feature details estimated closing costs for borrowers.",
                    'Experienced agile software development methodologies emphasizing continuous delivery.',
                    'Wrote unit tests for all contributions and bug fixes.',
                ],
                duration: {
                    startDate: 'May 2020',
                    endDate: 'August 2020',
                },
            },
        ],
    },
];
