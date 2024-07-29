### JavaScript

JavaScript has several data types that can be broadly categorized into two groups: primitive types and non-primitive types (objects). Here’s an overview of each type with explanations:

### Primitive Data Types

1. **String**
   - Represents a sequence of characters.
   - Enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

   ```javascript
   const str1 = 'Hello';
   const str2 = "World";
   const str3 = `Hello, ${str2}!`; // Template literals
   ```

2. **Number**
   - Represents both integer and floating-point numbers.

   ```javascript
   const int = 42;
   const float = 3.14;
   const notANumber = NaN; // Result of invalid numerical operations
   const infinity = Infinity; // Result of dividing by 0
   ```

3. **Boolean**
   - Represents logical values: `true` or `false`.

   ```javascript
   const isTrue = true;
   const isFalse = false;
   ```

4. **Undefined**
   - Represents a variable that has been declared but not yet assigned a value.

   ```javascript
   let a;
   console.log(a); // Output: undefined
   ```

5. **Null**
   - Represents the intentional absence of any object value. It is often used to indicate that a variable should be empty.

   ```javascript
   const empty = null;
   ```

6. **Symbol**
   - Represents a unique and immutable primitive value. Often used to add unique property keys to objects.

   ```javascript
   const sym = Symbol('description');
   ```

7. **BigInt**
   - Represents whole numbers larger than the largest number JavaScript can reliably represent with the `Number` type (2^53 - 1).

   ```javascript
   const bigInt = BigInt(9007199254740991);
   const anotherBigInt = 9007199254740991n; // Suffix `n` to create a BigInt
   ```

### Non-Primitive Data Types (Objects)

1. **Object**
   - Represents a collection of key-value pairs. Keys are strings (or Symbols) and values can be of any type.

   ```javascript
   const obj = {
     name: 'John',
     age: 30,
     isStudent: false
   };
   ```

2. **Array**
   - A special type of object used to store ordered collections of values.

   ```javascript
   const arr = [1, 2, 3, 4, 5];
   ```

3. **Function**
   - A callable object that executes a block of code. Functions can be assigned to variables, passed as arguments, and returned from other functions.

   ```javascript
   function greet() {
     console.log('Hello, World!');
   }
   ```

4. **Date**
   - Represents dates and times.

   ```javascript
   const date = new Date();
   ```

5. **RegExp**
   - Represents regular expressions, which are used for pattern matching within strings.

   ```javascript
   const regex = /ab+c/;
   ```

6. **Map**
   - Represents a collection of keyed data items, similar to an object. Keys can be of any type.

   ```javascript
   const map = new Map();
   map.set('name', 'John');
   map.set(1, 'one');
   ```

7. **Set**
   - Represents a collection of unique values.

   ```javascript
   const set = new Set();
   set.add(1);
   set.add(2);
   set.add(1); // Duplicate values are ignored
   ```

8. **WeakMap**
   - Similar to `Map` but allows garbage collection of keys (which must be objects) if there are no other references to them.

   ```javascript
   const weakMap = new WeakMap();
   const obj = {};
   weakMap.set(obj, 'some value');
   ```

9. **WeakSet**
   - Similar to `Set` but only holds objects and allows for garbage collection of its items.

   ```javascript
   const weakSet = new WeakSet();
   const obj = {};
   weakSet.add(obj);
   ```

### Special Types

1. **Function**
   - Functions in JavaScript are first-class objects, meaning they can be stored in variables, passed as arguments to other functions, and returned from functions.

   ```javascript
   const add = (a, b) => a + b;
   ```

### Type Checking

You can use the `typeof` operator to check the type of a variable.

```javascript
console.log(typeof 'Hello'); // Output: string
console.log(typeof 42); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object (this is a known quirk of JavaScript)
console.log(typeof Symbol('sym')); // Output: symbol
console.log(typeof 9007199254740991n); // Output: bigint
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object (arrays are a special type of object)
console.log(typeof function(){}); // Output: function
```

Understanding these data types and their properties is fundamental to effectively working with JavaScript.

### **What are the differences between `var`, `let`, and `const`?**

   - **`var`**: Function-scoped, can be redeclared and updated, hoisted with `undefined`.
   - **`let`**: Block-scoped, cannot be redeclared but can be updated, hoisted without initialization.
   - **`const`**: Block-scoped, cannot be redeclared or updated, hoisted without initialization. Used for constants.

### Array Methods

1. **`forEach`**

   - Executes a provided function once for each array element.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   numbers.forEach(number => console.log(number));
   // Output: 1 2 3 4 5
   ```

2. **`map`**

   - Creates a new array populated with the results of calling a provided function on every element in the calling array.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const squared = numbers.map(number => number * number);
   console.log(squared);
   // Output: [1, 4, 9, 16, 25]
   ```

3. **`filter`**

   - Creates a new array with all elements that pass the test implemented by the provided function.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const even = numbers.filter(number => number % 2 === 0);
   console.log(even);
   // Output: [2, 4]
   ```

4. **`reduce`**

   - Executes a reducer function on each element of the array, resulting in a single output value.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
   console.log(sum);
   // Output: 15
   ```

5. **`find`**

   - Returns the value of the first element in the array that satisfies the provided testing function.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const found = numbers.find(number => number > 3);
   console.log(found);
   // Output: 4
   ```

6. **`includes`**

   - Determines whether an array includes a certain value among its entries, returning `true` or `false`.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.includes(3));
   // Output: true
   ```

### String Methods

1. **`charAt`**

   - Returns the character at the specified index.

   ```javascript
   const str = "Hello, World!";
   console.log(str.charAt(0));
   // Output: H
   ```

2. **`toUpperCase`**

   - Returns the calling string value converted to uppercase.

   ```javascript
   const str = "Hello, World!";
   console.log(str.toUpperCase());
   // Output: HELLO, WORLD!
   ```

3. **`toLowerCase`**

   - Returns the calling string value converted to lowercase.

   ```javascript
   const str = "Hello, World!";
   console.log(str.toLowerCase());
   // Output: hello, world!
   ```

4. **`split`**

   - Splits a string into an array of substrings, and returns the new array.

   ```javascript
   const str = "Hello, World!";
   const words = str.split(" ");
   console.log(words);
   // Output: ["Hello,", "World!"]
   ```

5. **`substring`**

   - Returns a subset of a string between one index and another, or through the end of the string.

   ```javascript
   const str = "Hello, World!";
   const subStr = str.substring(0, 5);
   console.log(subStr);
   // Output: Hello
   ```

6. **`replace`**

   - Returns a new string with some or all matches of a pattern replaced by a replacement.

   ```javascript
   const str = "Hello, World!";
   const newStr = str.replace("World", "JavaScript");
   console.log(newStr);
   // Output: Hello, JavaScript!
   ```

### Object Methods

1. **`Object.keys`**

   - Returns an array of a given object's own enumerable property names.

   ```javascript
   const obj = { name: "John", age: 30 };
   const keys = Object.keys(obj);
   console.log(keys);
   // Output: ["name", "age"]
   ```

2. **`Object.values`**

   - Returns an array of a given object's own enumerable property values.

   ```javascript
   const obj = { name: "John", age: 30 };
   const values = Object.values(obj);
   console.log(values);
   // Output: ["John", 30]
   ```

3. **`Object.entries`**

   - Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

   ```javascript
   const obj = { name: "John", age: 30 };
   const entries = Object.entries(obj);
   console.log(entries);
   // Output: [["name", "John"], ["age", 30]]
   ```

4. **`Object.assign`**

   - Copies all enumerable own properties from one or more source objects to a target object. Returns the target object.

   ```javascript
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };
   const returnedTarget = Object.assign(target, source);
   console.log(returnedTarget);
   // Output: { a: 1, b: 4, c: 5 }
   ```

5. **`Object.freeze`**

   - Freezes an object: other code can't delete or change any properties.

   ```javascript
   const obj = { name: "John" };
   Object.freeze(obj);
   obj.name = "Jane"; // Fails silently or throws an error in strict mode
   console.log(obj.name);
   // Output: John
   ```

6. **`Object.seal`**

   - Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

   ```javascript
   const obj = { name: "John" };
   Object.seal(obj);
   obj.age = 30; // Fails silently or throws an error in strict mode
   obj.name = "Jane"; // Works
   console.log(obj);
   // Output: { name: "Jane" }
   ```

1. **Explain closures in JavaScript.**

   - A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. This allows the function to remember and access variables from its original scope.

   ```javascript
   function outer() {
     let count = 0;
     return function inner() {
       count++;
       console.log(count);
     };
   }

   const increment = outer();
   increment(); // 1
   increment(); // 2
   ```

2. **What is the event loop in JavaScript?**

   - The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations, despite being single-threaded. It handles asynchronous operations by placing callbacks in a queue, which are then executed one by one after the main execution stack is empty.

3. **Explain prototypal inheritance.**

   - Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects. Every JavaScript object has a prototype property, which is a reference to another object. This chain of prototypes allows inheritance.

   ```javascript
   const person = {
     greet() {
       console.log('Hello');
     }
   };

   const john = Object.create(person);
   john.greet(); // Hello
   ```

5. **What are Promises and how do they work?**

   - Promises are objects that represent the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, and rejected. Promises provide `.then()` and `.catch()` methods to handle asynchronous results.

   ```javascript
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Success!');
     }, 1000);
   });

   promise.then(result => console.log(result)); // Success!
   ```

### React

1. **What is the Virtual DOM and how does it work?**

   - The Virtual DOM is an in-memory representation of the real DOM elements generated by React components. When the state of an object changes, React updates the Virtual DOM, compares it with the previous version, and then updates the real DOM with only the changes. This improves performance by minimizing direct DOM manipulations.

2. **Explain the concept of hooks in React.**

   - Hooks are functions that let you use state and other React features in functional components. They allow you to manage component state, handle side effects, and use context without writing class components.

   - Common hooks: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`.

3. **What is the purpose of `useEffect` hook?**

   - The `useEffect` hook is used to handle side effects in functional components. It can perform actions such as fetching data, updating the DOM, or setting up subscriptions. It runs after the initial render and after every update.

   ```javascript
   useEffect(() => {
     // Side effect logic
     return () => {
       // Cleanup logic
     };
   }, [dependencies]);
   ```

4. **What are Higher-Order Components (HOCs)?**

   - HOCs are functions that take a component and return a new component. They are used for reusing component logic. HOCs do not modify the original component but wrap it in a container component.

   ```javascript
   const withLogger = WrappedComponent => {
     return props => {
       console.log('Rendering', WrappedComponent.name);
       return <WrappedComponent {...props} />;
     };
   };

   const Hello = () => <h1>Hello</h1>;
   const HelloWithLogger = withLogger(Hello);
   ```

5. **What is the difference between controlled and uncontrolled components?**

   - **Controlled Components**: Components where form data is handled by the component's state. The value of the input is driven by the state, and any change in the input updates the state.

   - **Uncontrolled Components**: Components where form data is handled by the DOM itself. Refs are used to access the form values directly from the DOM.

   ```javascript
   // Controlled
   const [value, setValue] = useState('');
   <input value={value} onChange={e => setValue(e.target.value)} />;

   // Uncontrolled
   const inputRef = useRef();
   <input ref={inputRef} />;
   ```

### React Context API and Redux

1. **useEffect**:
   - `useEffect` is a React hook that allows you to perform side effects in functional components. It can be used for data fetching, subscribing to events, or manually changing the DOM.
   - The `useEffect` hook runs after the first render and after every update.

2. **return**:
   - In the context of React functional components, the `return` statement is used to specify the JSX that should be rendered to the DOM.

3. **Redux**:
   - Redux is a state management library for JavaScript apps. It provides a central store for state, making it easier to manage and debug state changes in your application.

4. **Context API**:
   - The Context API in React allows you to create global variables that can be passed around your app. This is an alternative to prop drilling and can be used for things like themes, user information, or any other global state.

Let's create a simple example to demonstrate these concepts together. We'll create a small app that fetches a list of users from an API and displays it, using Redux for state management and the Context API for theme management.

### Step-by-Step Example

#### 1. Setting Up Redux

First, let's set up Redux. We need actions, reducers, and a store.

```bash
npm install redux react-redux
```

Create the following files:

- `src/redux/actions/userActions.js`

```javascript
export const fetchUsers = () => async dispatch => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', error });
  }
};
```

- `src/redux/reducers/userReducer.js`

```javascript
const initialState = {
  loading: false,
  users: [],
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_USERS_SUCCESS':
      return { loading: false, users: action.payload, error: null };
    case 'FETCH_USERS_FAILURE':
      return { loading: false, users: [], error: action.error };
    default:
      return state;
  }
};

export default userReducer;
```

- `src/redux/store.js`

```javascript
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
```

#### 2. Creating the Theme Context

- `src/context/ThemeContext.js`

```javascript
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### 3. Creating the Main Component

- `src/App.js`

```javascript
import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/actions/userActions';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Users />
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);

export default Root;
```

### Explanation

- **useEffect**: In the `Users` component, `useEffect` is used to dispatch the `fetchUsers` action when the component mounts.
- **return**: The `return` statement in the `App` component returns the JSX that includes a button to toggle the theme and the `Users` component.
- **Redux**: We set up Redux to manage the state of users. We have actions, a reducer, and a store. The `Users` component uses the `useDispatch` and `useSelector` hooks to interact with the Redux store.
- **Context API**: We use the Context API to manage the theme state. The `ThemeProvider` component provides the theme value and a function to toggle the theme, which is consumed by the `App` component.