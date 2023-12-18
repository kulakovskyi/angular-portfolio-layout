export const ProjectsData: ProjectsDataInterface[] = [
  {
    title: '_twitter_realworld ',
    image: '/assets/images/projects/project1/project1-main.png',
    description: 'This is an Angular application developed following the RealWorld API. RealWorld provides a unified API and specification for building social platforms using various technologies.',
    tech: ['angular', 'html', 'css'],
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_test_react ',
    image: '/assets/images/projects/project2/project2-main.png',
    description: 'this react description',
    tech: ['angular', 'html', 'css'],
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_test_angular_dr ',
    image: '/assets/images/projects/project3/project3-main.png',
    description: 'this angular node description',
    tech: ['react', 'html', 'css', 'node_js'],
    stack: '/assets/images/icons/react-icon.svg'
  },
  {
    title: '_twitter_realworld ',
    image: '/assets/images/projects/project1/project1-main.png',
    description: 'This is an Angular application developed following the RealWorld API. RealWorld provides a unified API and specification for building social platforms using various technologies.',
    tech: ['angular', 'html', 'css'],
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_test_react ',
    image: '/assets/images/projects/project2/project2-main.png',
    description: 'this react description',
    tech: ['angular', 'html', 'css'],
    stack: '/assets/images/icons/angular-icon.svg'
  },
  {
    title: '_test_angular_dr ',
    image: '/assets/images/projects/project3/project3-main.png',
    description: 'this angular node description',
    tech: ['react', 'html', 'css', 'node_js'],
    stack: '/assets/images/icons/react-icon.svg'
  }
]

export interface ProjectsDataInterface{
  title: string,
  image: string,
  description: string,
  tech: string[],
  stack: string
}
