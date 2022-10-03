## Top Loading Bar 

<a href="https://www.producthunt.com/posts/top-loading-bar?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-top&#0045;loading&#0045;bar" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=361998&theme=dark" alt="Top&#0032;Loading&#0032;Bar - reactjs | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

Using npm :-
```bash
npm i top-loading-bar
```

Using yarn :-
```bash
yarn add top-loading-bar
```
How to use this :-

With ref :-
```jsx
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const ref = useRef(null)

  return (
    <div>
      <LoadingBar color='#f11946' ref={ref} />
      <button onClick={() => ref.current.continuousStart()}>
        Start Continuous Loading Bar
      </button>
      <button onClick={() => ref.current.staticStart()}>
        Start Static Loading Bar
      </button>
      <button onClick={() => ref.current.complete()}>Complete</button>
      <br />
    </div>
  )
}

export default App
```

With state :-
```jsx
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}>Complete</button>
      <br />
    </div>
  )
}

export default App
```




