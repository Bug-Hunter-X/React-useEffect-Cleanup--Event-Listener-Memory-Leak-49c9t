# React useEffect Cleanup: Event Listener Memory Leak

This repository demonstrates a common issue in React applications involving improper cleanup of event listeners within the `useEffect` hook.  The example shows how failing to correctly remove an event listener leads to memory leaks and potential performance problems.  The solution demonstrates the correct way to add and remove event listeners to avoid these issues.

## Bug

The `bug.js` file contains a React component with an `useEffect` hook that adds a `scroll` event listener but fails to remove it properly. This leads to a memory leak because the listener remains attached to the window even after the component unmounts.

## Solution

The `bugSolution.js` file shows the corrected implementation. It uses a ref to store the event listener and ensures it is removed during cleanup.  This addresses the memory leak issue and ensures efficient resource management.