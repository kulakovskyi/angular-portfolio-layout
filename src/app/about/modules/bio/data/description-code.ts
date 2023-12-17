export const DescriptionCode = [
  {
    text: 'This Angular service sends a PUT request to update an article on the server, using the provided data and article identifier. The result is returned as an Observable.'
  },
  {
    text: 'This Angular code configures a module (AppModule) with an initializer function (appInitializer) for user authentication using AuthService. It also declares and imports various modules, sets up providers for services, and bootstraps the application with AppComponent.'
  },
  {
    text:
      'This Angular service, LoginEffect, uses NgRx effects for login actions. It has two effects: login$: Listens for login actions, updates the access token upon success, and dispatches corresponding success or failure actions.redirectAfterSubmit$: Listens for successful login actions and redirects to the home page.These effects handle asynchronous login operations and side effects like navigation.'
  },
  {
    text: 'This code defines an Angular service called RoleGuard implementing the CanActivate interface for route guarding. The guard checks whether the current user has the required roles to access a specific route. If not, it redirects to the home page. The guard is injected with AuthService, Store, and Router.'
  },
  {
    text: 'This Angular component, UserProfileComponent, manages the user profile page. It uses NgRx for state management, with observables like isLoading$ and isCurrentUserProfile$. Key methods include initialValue() for setup and fetchData() to retrieve user profile data. The component initializes and updates values based on route parameters and store selectors during the ngOnInit lifecycle hook.'
  },
  {
    text: 'This Angular component, SettingsComponent, manages user settings using NgRx for state management. It features form handling for updating user information, including submission status and backend error handling. The component also provides a logout option.'
  },
  {
    text: 'This Angular component, RegisterComponent, facilitates user registration using NgRx for state management. It includes form handling, captures user input, and dispatches a registration action to the store.'
  },
  {
    text: 'This Angular service, DynamicLoaderService, is responsible for dynamically loading modules. It uses the Injector to import and return the AuthModule and NotAuthModule asynchronously. These modules likely correspond to authenticated and non-authenticated pages, allowing for lazy loading in the application.'
  },
  {
    text: '\n' +
      'This TypeScript code defines an enumeration ActionType for article-related actions, including updating and retrieving articles, with corresponding success and failure states.'
  },
]
