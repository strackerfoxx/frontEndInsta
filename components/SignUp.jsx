import { useState } from 'react'
import Image from 'next/image'
import Alert from './Alert'
import { validatePass } from '@/helpers'

export default function SignUp() {
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [alerta, setAlerta] = useState({error: true, msg: ""})
    async function handleSubmit(e){
        e.preventDefault()
        if([name, userName, email, password].includes("")) return setAlerta({error: true, msg: "Todos los campos son obligatorios"})
        if(password.length < 8) return setAlerta({error: true, msg: "La contraseña debe tener minimo 8 caracteres"})
        if(!validatePass(password)) return setAlerta({error: true, msg: "La contraseña debe tener una mayuscula una minuscula y un numero o simbolo"})
        setAlerta({})
        const respuesta = await fetch("http://localhost:4000/api/users", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name,
              "username": userName,
              email,
              password
          })
        })
        const resultado = await respuesta.json()
        setAlerta({error: false, msg: resultado.msg})
    }
  return (
    <div className='sign'>
        <div>
          <Image src="/../public/img/logo.png" width={70} height={70} alt='logo'/>
        </div>
        {alerta.msg && <Alert alerta={alerta} />}
        <form onSubmit={handleSubmit}>
              <div className='campo'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input type="text" placeholder='name' onChange={e => setName(e.target.value)}/>
              </div>

              <div className='campo'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <input type="text" placeholder='username' onChange={e => setUserName(e.target.value)}/>
              </div>

              <div className='campo'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className='campo'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)}/>
              </div>

          <button className='btn'>Register</button>
        </form>
    </div>
  )
}