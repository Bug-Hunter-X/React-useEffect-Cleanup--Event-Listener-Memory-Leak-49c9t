```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const scrollListenerRef = useRef(null);

  useEffect(() => {
    // Correct way to add event listener using useRef
    scrollListenerRef.current = handleScroll;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    // Do something
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>{count}</div>
  );
}

export default MyComponent;
```