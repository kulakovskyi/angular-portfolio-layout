import {ProjectsDataInterface} from "../types/projects-data.interface";

export const ProjectsData: ProjectsDataInterface[] = [
  {
    title: '_twitter_realworld ',
    image: '/assets/images/projects/project1/project1-main.png',
    arrayImg: ['/assets/images/projects/project1/gif.gif',
      '/assets/images/projects/project1/screenshot1.png',
      '/assets/images/projects/project1/screenshot2.png',
      '/assets/images/projects/project1/screenshot3.png'
    ],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    description: 'This is an Angular application developed following the RealWorld API. RealWorld provides a unified API and specification for building social platforms using various technologies.',
    tech: ['angular', 'html', 'css'],
    stack: '/assets/images/icons/angular-icon.svg',
    information: '<ul style="margin:0;padding-left:20px;"><li style="margin-bottom:5px;"><strong>Authentication and Authorization:</strong><ul style="margin:0;padding-left:20px;"><li>User authentication mechanisms.</li><li>Authorization features for secure access.</li></ul></li><li style="margin-bottom:5px;"><strong>CRUD Operations:</strong><ul style="margin:0;padding-left:20px;"><li>Create, Read, Update, and Delete operations for data management.</li></ul></li><li style="margin-bottom:5px;"><strong>RealWorld-Styled Interface:</strong><ul style="margin:0;padding-left:20px;"><li>User interface designed in accordance with RealWorld standards and best practices.</li></ul></li><li style="margin-bottom:5px;"><strong>User Interactions:</strong><ul style="margin:0;padding-left:20px;"><li>Subscribe to other users.</li><li>Like and dislike other users.</li><li>Like and unlike posts.</li></ul></li><li style="margin-bottom:5px;"><strong>Routing:</strong><ul style="margin:0;padding-left:20px;"><li>Implement routing for seamless navigation.</li></ul></li><li style="margin-bottom:5px;"><strong>Post Management:</strong><ul style="margin:0;padding-left:20px;"><li>Add and remove posts.</li><li>Edit existing posts.</li></ul></li><li style="margin-bottom:5px;"><strong>Profile Customization:</strong><ul style="margin:0;padding-left:20px;"><li>Configure and customize user profiles.</li></ul></li><li style="margin-bottom:5px;"><strong>Subscription System:</strong><ul style="margin:0;padding-left:20px;"><li>Enable the functionality to subscribe to users.</li></ul></li><li style="margin-bottom:5px;"><strong>Like System:</strong><ul style="margin:0;padding-left:20px;"><li>Allow users to like posts.</li></ul></li><li style="margin-bottom:5px;"><strong>Advanced Post Features:</strong><ul style="margin:0;padding-left:20px;"><li>Implement additional post-related features.</li></ul></li></ul><p style="margin-top:10px;margin-bottom:5px;"><strong>Technologies</strong></p><ul style="margin:0;padding-left:20px;"><li style="margin-bottom:5px;"><strong>Angular:</strong> Version of your Angular framework.</li><li style="margin-bottom:5px;"><strong>RxJS:</strong> Use of reactive streams for managing data and events.</li><li style="margin-bottom:5px;"><strong>NgRx Store:</strong> State management library for Angular applications.</li><li style="margin-bottom:5px;"><strong>NgRx Effects:</strong> Middleware for handling side effects in your application.</li><li style="margin-bottom:5px;"><strong>NgRx Selectors:</strong> Efficiently querying and selecting slices of state.</li><li style="margin-bottom:5px;"><strong>NgRx Reducers:</strong> Functions that specify how the application\'s state changes in response to actions.</li><li style="margin-bottom:5px;"><strong>Bootstrap (or other styling framework):</strong> For creating a stylish user interface.</li></ul>'
  },
  {
    title: '_portfolio_angular ',
    image: '/assets/images/projects/project2/project2-main.png',
    arrayImg: ['/assets/images/projects/project2/gif.gif',
      '/assets/images/projects/project2/screenshot1.png',
      '/assets/images/projects/project2/screenshot2.png',
      '/assets/images/projects/project2/screenshot3.png',
      '/assets/images/projects/project2/screenshot4.png'
    ],
    description: 'This project is a dynamic portfolio website built with Angular, showcasing various features such as integration with Firebase for data storage, animations using Angular\'s built-in animation capabilities, a simple Snake game on the start screen, GitHub code snippet display, and a contact form with reactive forms for email submissions.',
    tech: ['angular', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/angular-portfolio-layout',
    stack: '/assets/images/icons/angular-icon.svg',
    information: '<ul><li>Angular: The project is developed using the Angular framework.</li><li>RxJS: The RxJS library is used for reactive programming.</li><li>Firebase: Data is fetched from and stored on Firebase for a seamless backend experience.</li></ul><ul><li>Animations: The application utilizes Angular\'s built-in animation features to enhance the user experience.</li><li>Snake Game: Enjoy a mini Snake game on the start screen for some added fun.</li><li>GitHub Code Snippets: The app features a service that fetches and displays active code snippets from GitHub.</li><li>Contact Form: A contact form is implemented using reactive forms for efficient handling of user input.</li><li>Email Submission: Users can submit messages via the contact form, with email submissions facilitated through reactive forms.</li></ul><p>Cross-Browser Compatibility: The application is designed to work seamlessly across all resolutions and is fully compatible with various web browsers.</p>\n'
  },
  {
    title: '_blog-MEAN ',
    image: '/assets/images/projects/project4/project4-main.png',
    arrayImg: ['/assets/images/projects/project4/gif.gif',
      '/assets/images/projects/project4/screenshot1.png',
      '/assets/images/projects/project4/screenshot2.png',
      '/assets/images/projects/project4/screenshot3.png',
      '/assets/images/projects/project4/screenshot4.png'
    ],
    description: '\n' +
      'This application, developed with Angular for the frontend, Node.js and Express for the backend, and MongoDB for the database, delivers a dynamic and scalable web experience with features including user authentication, real-time communication, and efficient data storage.',
    tech: ['angular', 'html', 'css','node_js'],
    linkProject: 'https://github.com/kulakovskyi/angular-blog-MEAN',
    stack: '/assets/images/icons/angular-icon.svg',
    information: '<ul><li>Angular Frontend:</li><ul><li>Developed using Angular, a TypeScript-based framework</li><li>Utilizes two-way data binding, dependency injection, and modular component-based architecture</li></ul><li>Node.js and Express Backend:</li><ul><li>Built on Node.js for fast and scalable server-side JavaScript</li><li>Uses Express for routing, middleware, and backend functionalities</li><li>Implements RESTful APIs for efficient frontend-backend communication</li></ul><li>MongoDB Database:</li><ul><li>Uses MongoDB, a NoSQL database, for flexible data storage in JSON-like BSON format</li><li>Seamless integration with Node.js using the official MongoDB Node.js driver</li></ul><li>Features:</li><ul><li>User Authentication and Authorization:</li><ul><li>Implements secure user authentication and authorization mechanisms</li></ul><li>Data Storage and Retrieval:</li><ul><li>Efficient data storage and retrieval using MongoDB</li></ul><li>Real-time Communication:</li><ul><li>Utilizes WebSocket or other real-time communication protocols</li></ul><li>Scalability and Performance:</li><ul><li>Designed for scalability and optimal performance</li></ul></ul><li>Deployment:</li><ul><li>Can be deployed on various platforms</li><li>Containerization options like Docker for simplified deployment and management</li></ul><li>Conclusion:</li><ul><li>Comprehensive web solution combining Angular, Node.js, Express, and MongoDB</li><li>Delivers a feature-rich and scalable user experience</li></ul></ul>\n'
  },
  {
    title: '_cost_accounting ',
    image: '/assets/images/projects/project3/project3-main.png',
    arrayImg: [
      '/assets/images/projects/project3/screenshot1.png',
      '/assets/images/projects/project3/screenshot2.png',
    ],
    description: 'React Cost Accounting" is a minimalist task management app inspired by the simplicity of a to-do list. Built on React, it provides a clean interface for creating, editing, and marking tasks as complete. The app emphasizes quick task management, making it easy for users to stay organized and focused.',
    tech: ['react', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/cost-accounting',
    stack: '/assets/images/icons/react-icon.svg',
    information: '<ul><li>React Income Tracker App<ul><li>This mini-application, developed using React, allows users to track their income efficiently. The app features a straightforward interface for adding and viewing income records.</li></ul></li><li>Features<ul><li>Easily add new income records by specifying:<ul><li>Date of income receipt.</li><li>Source of income (e.g., salary, freelance, investments).</li><li>Income amount.</li></ul></li><li>User-friendly interface for viewing and filtering income records by date, source, or other parameters.</li><li>Visualize and analyze income data through built-in charting and reporting functionality.</li><li>Responsive design ensures a seamless user experience on both desktop and mobile devices.</li></ul></li><li>Technologies<ul><li>React: Used for building the user interface and enabling dynamic user interaction.</li><li>State Management: Employing state management (e.g., Redux or Context API) for efficient control of the application state.</li><li>Routing: React Router for navigation and state management during page transitions.</li><li>Charts: Utilizing chart libraries like Chart.js or D3.js for visualizing data.</li><li>CSS-in-JS: Styling components using the CSS-in-JS approach (e.g., Styled-components).</li></ul></li><li>Getting Started<ul><li>Install dependencies: npm install</li><li>Start the application: npm start</li><li>Open http://localhost:3000 in your browser.</li></ul></li><li>Usage<ul><li>Add income records using the provided interface.</li><li>View and filter income data as needed.</li><li>Explore charts and reports for better insights into your financial situation.</li></ul></li><li>Contributing<ul><li>Feel free to contribute by submitting issues or pull requests.</li></ul></li></ul></li></ul>\n'
  },


]


