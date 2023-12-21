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
    title: '_cost_accounting ',
    image: '/assets/images/projects/project3/project3-main.png',
    description: 'React Cost Accounting" is a minimalist task management app inspired by the simplicity of a to-do list. Built on React, it provides a clean interface for creating, editing, and marking tasks as complete. The app emphasizes quick task management, making it easy for users to stay organized and focused.',
    tech: ['react', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    stack: '/assets/images/icons/react-icon.svg'
  },


]


