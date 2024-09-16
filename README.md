## Posts Application

This is a frontend project built with React that demonstrates key functionality such as creating, deleting, filtering, and paginating posts using a fake REST API from JSONPlaceholder. The primary focus of this project was to implement the core functionality and showcase my knowledge of React, rather than emphasize styling or CSS design.
## Features

    Authentication:
        Users can login and logout via a basic form. The login state is managed using React context and stored in localStorage for session persistence.

    Create Post:
        Users can create new posts. These posts are dynamically rendered in the posts list upon submission.

    Delete Post:
        Users can delete posts from the list.

    Routing:
        The app uses React Router for navigation between pages, including posts, individual post details, and login/logout views. Unauthenticated users are redirected to the login page when necessary.

    Pagination:
        The posts list includes pagination controls, allowing users to browse through posts in chunks of data. The pagination logic dynamically fetches posts from the API.

    Filter Posts:
        Users can filter posts by title, enabling quick searches across the available post data.

    Infinite Scroll:
        The app uses an infinite scroll feature to load more posts as the user scrolls down the page, implementing IntersectionObserver for smooth, dynamic data fetching.

## Tech Stack

    React: Utilized for building the user interface and managing component states.
    React Router: Implemented for routing and navigation between different pages.
    Axios: Used for making HTTP requests to the JSONPlaceholder API.
    Context API: Used to handle authentication and share the user’s login state across the app.
    IntersectionObserver API: Used for implementing infinite scroll functionality.
    LocalStorage: Utilized to persist the authentication state across page reloads.

## Functionality Focus

The primary focus of this project was on building robust functionality and implementing key frontend development concepts like authentication, CRUD operations, and dynamic data handling with pagination and filtering. The project emphasizes React component architecture, state management, and efficient interaction with REST APIs. CSS and styling are kept minimal to prioritize the implementation of core features.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
