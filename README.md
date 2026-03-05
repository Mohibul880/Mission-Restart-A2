1) What is JSX, and why is it used?

Ans: JSX is a syntax that allows you to write HTML-like UI in JavaScript in React. It is used because it improves the structure/readability of components and makes it easier to build UI.

2) What is the difference between State and Props?

Ans: State is the component's own internal data, which can change over time. And Props are data sent from the parent component to the child component, which the child does not change (receive).

3) What is the useState hook, and how does it work?

Ans: useState is a React hook that is used to store state in functional components. It returns an array—one with the current state value, and another with a function that can be used to update the state.

4) How can you share state between components in React?

Ans: In React, to share state between multiple components, the state is usually kept in a common parent component, then passed to the child components as needed with props—this is called lifting state up.

5) How is event handling done in React?

Ans: In React, event handling is done using event props in JSX, such as onClick, onChange, etc. When these events are triggered, a specific function is called and the action is performed accordingly.