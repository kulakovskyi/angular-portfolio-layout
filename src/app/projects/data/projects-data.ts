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
    title: '_asana_app ',
    image: '/assets/images/projects/project2/project2-main.png',
    description: 'Angular Task Manager" is a sleek app for effortless task management, offering a user-friendly interface akin to Asana. It\'s designed for streamlined workflows, allowing flexible customization and real-time collaboration among team members.',
    tech: ['angular', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_cost_accounting ',
    image: '/assets/images/projects/project3/project3-main.png',
    description: 'React Cost Accounting" is a minimalist task management app inspired by the simplicity of a to-do list. Built on React, it provides a clean interface for creating, editing, and marking tasks as complete. The app emphasizes quick task management, making it easy for users to stay organized and focused.',
    tech: ['react', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    stack: '/assets/images/icons/react-icon.svg'
  },
  {
    title: '_twitter_realworld ',
    image: '/assets/images/projects/project1/project1-main.png',
    description: 'This is an Angular application developed following the RealWorld API. RealWorld provides a unified API and specification for building social platforms using various technologies.',
    tech: ['angular', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_asana_app ',
    image: '/assets/images/projects/project2/project2-main.png',
    description: 'Angular Task Manager" is a sleek app for effortless task management, offering a user-friendly interface akin to Asana. It\'s designed for streamlined workflows, allowing flexible customization and real-time collaboration among team members.',
    tech: ['angular', 'html', 'css'],
    linkProject: 'https://github.com/kulakovskyi/twitter-angular-realworld',
    stack: '/assets/images/icons/angular-icon.svg'
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

export interface ProjectsDataInterface{
  title: string,
  image: string,
  description: string,
  tech: string[],
  stack: string,
  information?: string,
  arrayImg?: string[],
  linkProject: string
}
