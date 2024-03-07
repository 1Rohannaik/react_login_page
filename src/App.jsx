import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [allEntry, setAllEntry] = useState([])

  function submitForm(e) {
    e.preventDefault();
    const newEntry = { email: email, password: password }
    setAllEntry([...allEntry, newEntry])
    
    setEmail("")
    setPassword("")
    
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div className="container">
          <div className="email">
            <h3>email</h3>
            <label htmlFor="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="enter email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <h3>password</h3>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn">submit</button>
        </div>
      </form>
      <div>
        {
          allEntry.map((data) => {
            return (
              <>
                <div key={data.id} className="data">
                  <p>{data.email}</p>
                  <p>{data.password}</p>
                </div>
              </>
            );
          })
        }
      </div>
    </>
  );
}

export default App
