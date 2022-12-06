export const experience: Experience[] = [
    {
        organization: {
            name: 'Monkeytype',
            image: './static/images/monkeytype.png',
        },
        positions: [
            {
                title: 'Maintainer',
                description: [
                    'Implemented configurable real-time leaderboards using Redis.',
                    'Led the development of the <a class="link" href="https://api.monkeytype.com/docs/">public API</a>.',
                    'Overhauled and expanded the existing API to follow RESTful conventions.',
                    'Setup a continuous integration pipeline using Github Actions.',
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
                title: 'Software Engineer',
                description: [
                    'Building features for the <a class="link" href="https://blend.com/products/features/loan-officer-toolkit/">LO Toolkit</a>.',
                ],
                duration: {
                    startDate: 'July 2022',
                },
            },
            {
                title: 'Software Engineer Intern',
                description: [
                    'Assisted with the design of a <a class="link" href="https://developers.blend.com/blend/reference/put-product-on-loan">public API endpoint</a> that allows clients to update loan product data when changes are made in an external loan origination system.',
                    "This API expands integration capabilities with Blend's mortgage platform.",
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
