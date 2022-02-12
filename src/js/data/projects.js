const BASE_IMAGE_URL = './static/images'

const projects = [
    {
        title: 'Handwritten Digit Classifier',
        subTitle: 'Machine Learning',
        cardImage: `${BASE_IMAGE_URL}/network.png`,
        description: 'A tool that lets users visualize\
      and interact with a neural network.',
        skills: ['LOVE2D', 'Lua'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Bruception/digit-classifier-love',
            },
        ],
    },
    {
        title: 'Pathfinding Visualizer',
        subTitle: 'Web Application',
        cardImage: `${BASE_IMAGE_URL}/path.png`,
        description: 'A web app that lets users visualize\
      common pathfinding algorithms.',
        skills: ['JavaScript', 'HTML', 'CSS'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Bruception/pathfinding-visualizer'    
            },
            {
                type: 'demo',
                uri: '/pathfinding-visualizer',
            },
        ],
    },
    {
        title: 'Graphing Calculator',
        subTitle: 'Desktop Application',
        cardImage: `${BASE_IMAGE_URL}/calculator.png`,
        description: 'A graphing calculator capable of graphing any function and\
      approximating bounded integrals.',
        skills: ['LOVE2D', 'Lua'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Arturoo0/GraphingCalculator',
            },
        ],
    },
    {
        title: 'bitz',
        subTitle: 'Mobile Game',
        cardImage: `${BASE_IMAGE_URL}/bitz.png`,
        description: 'A puzzle game based on the Tower of Hanoi.\
      Players need to solve puzzles in the optimal number of moves.',
        skills: ['LOVE2D', 'Lua'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Bruception/bitz',
            },
            {
                type: 'demo',
                uri: 'https://bitz-game.herokuapp.com/',
            },
        ],
    },
    {
        title: 'Weather Tracker',
        subTitle: 'Web Application',
        cardImage: `${BASE_IMAGE_URL}/weather.png`,
        description: 'A web application that allows users to track the weather of various locations.\
      Weather data is fetched from OpenWeatherMap\'s API.',
        skills: ['NodeJS', 'Express', 'JavaScript', 'HTML', 'CSS'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Arturoo0/Weather-tracker-'
            },
            {
                type: 'demo',
                uri: 'https://weather-tracker-js.herokuapp.com/',
            },
        ],
    },
    {
        title: 'CovidSync',
        subTitle: 'Web Application',
        cardImage: `${BASE_IMAGE_URL}/covidsync.png`,
        description: 'An application that integrates various APIs and services\
      to provide crucial resources for the Spanish-speaking and bilingual\
      communities about COVID-19. <strong>Won 2nd place</strong> at PantherHacks 2020.',
        skills: ['React', 'NodeJS', 'Express', 'Firestore', 'JavaScript', 'HTML', 'CSS'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/FultonG/CovidSync',
            },
            {
                type: 'news',
                uri: 'http://panthernow.com/2020/07/20/pantherhacks-2020-seeks-to-foster-innovation/',
            },
        ],
    },
    {
        title: 'FIU Course API',
        subTitle: 'Web Application',
        cardImage: `${BASE_IMAGE_URL}/json.png`,
        description: 'A web application that allows students to query courses offered at FIU.',
        skills: ['NodeJS', 'Express', 'Jest', 'JavaScript', 'HTML', 'CSS', 'Bash', 'Python'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Bruception/fiu-course-api',
            },
            {
                type: 'demo',
                uri: 'https://fiu-course-api.herokuapp.com/',
            },
        ],
    },
    {
        title: 'Advent of Code 2021 Solver',
        subTitle: 'Shell program',
        cardImage: `${BASE_IMAGE_URL}/aoc.jpeg`,
        description: 'The full set of solutions for all\
    puzzles featured in the Advent of Code 2021 event.',
        skills: ['Bash', 'Python'],
        links: [
            {
                type: 'source-code',
                uri: 'https://github.com/Bruception/advent-of-code-2021',
            },
        ],
    },
];

export default projects;
