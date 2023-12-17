export const DataTopBar: DataTopBarInterface[] = [
  {
    route: '/',
    name: '_hello'
  },
  {
    route: '/about',
    name: '_about-me'
  },
  {
    route: '/projects',
    name: '_contact-me'
  }
]

export interface DataTopBarInterface{
  route: string,
  name: string
}
