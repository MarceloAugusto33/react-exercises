import { useState } from 'react';
import './App.css'
import { GoPerson, GoSearch } from "react-icons/go";

export function App() {

  const [username, setUsername] = useState('');

  function requestApi(e) {
    e.preventDefault()

    if (!username) return
    const userWrapper = document.querySelector(".user__wrapper");
    const url = `https://api.github.com/users/${username}`

    fetch(url)
      .then(data => data.json())
      .then(user => {
        userWrapper.innerHTML = `
          <img src="https://github.com/${user.login}.png" alt="" />
          <span>${user.login}</span>
        `
      })
  }


  return (
    <div className='container'>
      <div className="card">
        <h2>GITHUB SEARCH</h2>
        <form>
          <div className="input__wrapper">
            <GoPerson />
            <input
              type="text"
              placeholder='nome de usuario'
              onChange={e => setUsername(e.target.value)}
            />
            <button onClick={requestApi}>
              <GoSearch />
            </button>
          </div>
        </form>
        <div className="user__wrapper">
        </div>
      </div>
    </div>
  )
}