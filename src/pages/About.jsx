import React from "react";
import "../styles/App.scss";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="App">
      <h1>About This Project</h1>
      <p>
        This is a frontend project built with <strong>React</strong> that
        demonstrates key functionality such as creating, deleting, filtering,
        and paginating posts using a<strong> fake REST API</strong> from
        <a href="https://jsonplaceholder.typicode.com/"> JSONPlaceholder</a>.
        The primary focus of this project was to implement the core{" "}
        <strong>functionality</strong> and showcase my knowledge of React,
        rather than emphasize styling or CSS design.
      </p>
      <h2>Features</h2>
      <ul>
        <li>
          <strong>Authentication</strong>: Users can <strong>login</strong> and{" "}
          <strong>logout</strong> via a basic form. The login state is managed
          using React context and stored in <code>localStorage</code> for
          session persistence.
        </li>
        <li>
          <strong>Create Post</strong>: Users can{" "}
          <strong>create new posts</strong> and submit them to the fake API.
          These posts are dynamically rendered in the posts list upon
          submission.
        </li>
        <li>
          <strong>Delete Post</strong>: Users can <strong>delete posts</strong>{" "}
          from the list. The application interacts with the JSONPlaceholder API
          to remove posts in real-time.
        </li>
        <li>
          <strong>Routing</strong>: The app uses <strong>React Router</strong>{" "}
          for navigation between pages, including posts, individual post
          details, and login/logout views. Unauthenticated users are redirected
          to the login page when necessary.
        </li>
        <li>
          <strong>Pagination</strong>: The posts list includes{" "}
          <strong>pagination controls</strong>, allowing users to browse through
          posts in chunks of data. The pagination logic dynamically fetches
          posts from the API.
        </li>
        <li>
          <strong>Filter Posts</strong>: Users can <strong>filter posts</strong>{" "}
          by title, enabling quick searches across the available post data.
        </li>
        <li>
          <strong>Infinite Scroll</strong>: The app uses an{" "}
          <strong>infinite scroll</strong> feature to load more posts as the
          user scrolls down the page, implementing{" "}
          <code>IntersectionObserver</code> for smooth, dynamic data fetching.
        </li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li>
          <strong>React</strong>: Used for building the user interface and
          managing component states.
        </li>
        <li>
          <strong>React Router</strong>: Implemented for routing and navigation
          between different pages.
        </li>
        <li>
          <strong>Axios</strong>: Used for making HTTP requests to the
          JSONPlaceholder API.
        </li>
        <li>
          <strong>Context API</strong>: Used to handle{" "}
          <strong>authentication</strong> and share the user’s login state
          across the app.
        </li>
        <li>
          <strong>IntersectionObserver API</strong>: Used for implementing{" "}
          <strong>infinite scroll</strong> functionality.
        </li>
        <li>
          <strong>LocalStorage</strong>: Utilized to persist the authentication
          state across page reloads.
        </li>
      </ul>

      <h2>Functionality Focus</h2>
      <p>
        The primary focus of this project was on building robust{" "}
        <strong>functionality</strong> and implementing key frontend development
        concepts like authentication, CRUD operations, and dynamic data handling
        with pagination and filtering. The project emphasizes React component
        architecture, state management, and efficient interaction with REST
        APIs. <strong>CSS</strong> and styling are kept minimal to prioritize
        the implementation of core features.
      </p>
    </div>
  );
};

export default About;
