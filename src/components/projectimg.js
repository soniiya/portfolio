import stackImage from './projectimg/stackoverflow.png';
import NextUI from './projectimg/Nextui.png'
import socialImage from './projectimg/social.png';
import modernImage from './projectimg/Modern.png';
import Drumkit from './projectimg/drumkit.png';
import Emojiapp from './projectimg/Emojiapp.png';
import AwsImage from './projectimg/awsImage.png';

const projectimg=[

    {
        id:1,
        image: stackImage,
        heading:'Stack-overflow clone',
        discription:'I made a clone of stack overflow which is a full stack application. I built this application using MERN stack development process. I used React.js for frontend development and Express.js, Node.js for the backend of the project. I used MongoDB to store the data in this project. I learnt about React-redux and RestAPIs , how to integrate client with server and how toh fetch data using RestAPIs.',
        live:'https://stack-overflow-sonia.netlify.app/',
        github:'https://github.com/soniiya/StackOverflow-clone.git'
    },
    {
        id:2,
        image: socialImage,
        heading:'Photo-sharing application',
        discription:'This is also a full-stack application but I used MySQL instead of MongoDB database in this project. I implemented authentication and image sharing functionality. I used AWS services to get remote database access and so that I can deploy server on Cyclic and frontend on Netlify.',
        live:'https://social-media-react-project.netlify.app/',
        github:'https://github.com/soniiya/photo_sharing_application.git'
    },
    {
        id:3,
        image: AwsImage,
        heading:'AWS project',
        discription:'Developed a serverless application using AWS Amplify and AWS Lambda for executing post-confirmation triggers to automate user profile creation. Implemented GraphQL APIs with AWS Amplify data client to perform CRUD operations on a UserProfile model. Optimized a React-based frontend to interact with the Amplify backend, dynamically fetching and displaying user profiles',
        live: 'https://github.com/soniiya/Serverless-aws-application.git',
        github: 'https://github.com/soniiya/Serverless-aws-application.git'
    },
    {
        id:3,
        image: NextUI,
        heading:'Nextjs project',
        discription:'This is Nextjs and MongoDB based ful-stack application. Learnt how to implement server side and client side rendering and how to connect database on Nextjs application.',
        github:'https://github.com/soniiya/NEXT_full-stack.git'
    },
    {
        id:4,
        image:modernImage,
        heading:'Modern UI/UX frontend-project',
        discription:'This is modern UI/UX based React appliction which is fully responsive. I leant a lot about CSS ans responsive designs for all the devices in this project.',
        live:'https://soniiya.github.io/modern-ui-react',
        github:'https://github.com/soniiya/modern-ui-react.git'
    },
    {
        id:5,
        image:Drumkit,
        heading:'Drum-kit',
        discription:'This was a my first project while learning Javascript. I learnt basic javaScript functions and objects and how to manipulate DOM tree using javaScript by making interactive application.',
        link:'https://soniiya.github.io/Drum-kit'
    },
    {
        id:6,
        image:Emojiapp,
        heading:'Emoji-app',
        discription:'I built this project to learn async await functions and how to fetch data from an API. I learnt useEffect hook and state management in React.',
        link:'https://emoji-react-app.netlify.app/',
        github:'https://github.com/soniiya/Emoji-app.git'
    },
]

export default projectimg