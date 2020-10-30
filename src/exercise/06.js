// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react';

function UsernameForm({onSubmitUsername}) {
  // const ref = React.useRef();
  const [username, setUsername] = React.useState('');

  const onInputChange = (e) => setUsername(e.target.value)
  // const isValid = username && username === username.toLowerCase();
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${username}`)
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        {/* <input ref={ref} id="username" type="text" /> */}
        <input id="username" type="text" onChange={onInputChange} value={username} />
      </div>
      <button /* disabled={!isValid} */ type="submit">Submit</button>
        {/* {!isValid && <label role="alert">Username must be lowercase</label>} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
