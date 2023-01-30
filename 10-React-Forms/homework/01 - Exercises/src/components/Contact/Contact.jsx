import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  var errors={}
  if(!inputs.name){
    errors.name = "Se requiere un nombre"
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = "Debe ser un correo electrónico"
  }
  if(!inputs.message){
    errors.message = "Se requiere un mensaje"
  }

  return errors
}

export default function Contact () {
  const [inputs, setImputs] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  function handleChange(evento){
    setImputs({
      ...inputs,
      [evento.target.name]: evento.target.value
    })
    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value
      }))
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!Object.values(errors).length){
      alert("Datos completos")
      setImputs({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
    } else{
      alert("Debe llenar todos los campos")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Nombre:</label>
      <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} name='name' placeholder='Escribe tu nombre...' type="text"/>
      
      {errors.name && <p className='danger'>{errors.name}</p>}

      <label htmlFor='email'>Correo Electrónico:</label>
      <input className={errors.email && 'warning'} onChange={handleChange} value={inputs.email} name='email' placeholder='Escribe tu email...' type="text"/>
      
      {errors.email && <p className='danger'>{errors.email}</p>}

      <label htmlFor='message'>Mensaje:</label>
      <textarea value={inputs.message} className={errors.message && 'warning'} onChange={handleChange} name='message' placeholder='Escribe tu mensaje...' type="text" cols="30" rows="10" />

      {errors.message && <p className='danger'>{errors.message}</p>}

      <button type='submit'>Enviar</button>
    </form>
  )
}
