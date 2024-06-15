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


## React Context API 
The React Context API is a feature that allows you to manage global state in a React application without prop drilling (passing props through intermediate components). It provides a way to share values like themes, user authentication status, or any other global data across the component tree.

### Key Concepts:

1. **Provider**: The `Provider` component is used to wrap the part of your application where you want to make the shared data available. It accepts a `value` prop which can be any JavaScript value (object, array, string, etc.).

2. **Consumer**: The `Consumer` component allows you to access the `value` from the nearest `Provider` in the component tree. This component uses a render prop (or function as children) pattern to access and consume the `value`.

3. **createContext**: This function creates a new context object. It takes an optional parameter for the default value which is used when a component does not find a matching `Provider` above it in the tree.

### Workflow:

- **Create a Context**: Use `createContext` to create a new context object. This object will provide a `Provider` and a `Consumer`.

- **Wrap Components**: Wrap the components that need access to the context with a `Provider`, passing in the necessary `value`.

- **Consume Context**: Use the `Consumer` component or `useContext` hook within child components to access the context's `value`.

### Example (using Functional Components and Hooks):

```jsx
// Step 1: Create a context
const ThemeContext = React.createContext('light');

// Step 2: Wrap the components that need access to the context
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// Step 3: Consume the context
function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return (
    <div>
      <Button theme={theme} />
    </div>
  );
}

function Button({ theme }) {
  return <button className={theme}>Click me</button>;
}
```

### useContext Hook (alternative to Consumer):

- The `useContext` hook allows functional components to consume context directly, eliminating the need for `Consumer` components.

```jsx
function Button() {
  const theme = React.useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

### Benefits:

- **Avoids Prop Drilling**: Context API helps avoid passing props through intermediate components that don't need them, making the code cleaner.
  
- **Global State Management**: Useful for managing global state such as themes, user authentication, localization, etc., without resorting to state management libraries like Redux in simpler cases.

- **Simplifies Component Composition**: Allows components to be more focused on their primary purpose by delegating state management to higher-level components.

The React Context API is powerful for managing state that needs to be accessed by many components at different levels of the component tree, providing a cleaner alternative to prop drilling and reducing complexity in larger applications.
