# Section 67 Intermediate State Concepts

Intermediate State Concepts

# What I Learned


- Wrong way updating state, where new state depends on **old state**


```

import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount =
     () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>+1</button>
        </div>
    );
}

export default Counter;

```

<img src="stateCount.JPG" alt="alt text" width="400"/>

- 1. Problem comes when multiple statements are occurring, **remember** state is update when view is re-rendered!

