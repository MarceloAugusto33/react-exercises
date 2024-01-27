import { useEffect, useState } from 'react'
import './App.css'

export function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [userValid, setUserValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)


  useEffect(() =>{
    password.length > 8 ? setPasswordValid(true) : setPasswordValid(false)

    user.length > 4 ? setUserValid(true) : setUserValid(false)
      
  }, [user, password])

  function postForm(e) {
    if(!userValid && !passwordValid){
      e.preventDefault()
      return
    }
    
    console.log("Formulario enviado")
  }


  return (
    <div className="container">
      <div className="form__wrapper">
        <h2>Login</h2>
        <form>
          <label htmlFor="user">Usuario:</label>

          <input
            type="text"
            id='user'
            placeholder='usuario'
            className={userValid? 'valid': ''}
            onChange={e => setUser(e.target.value)}
          />

          <label htmlFor="password">Senha:</label>

          <input
            type="password"
            id='password'
            placeholder='password'
            className={passwordValid? 'valid': ''}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            onClick={postForm}
          >Entrar</button>
        </form>
      </div>

    </div>

  )
}

