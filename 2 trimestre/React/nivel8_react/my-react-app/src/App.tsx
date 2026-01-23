import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'

export default function App() {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [usernameError, setUsernameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsername(value)

    if (value.trim().length <= 6) {
      setUsernameError('El username debe tener más de 6 caracteres')
    } else {
      setUsernameError('')
    }
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    if (!value.includes('@') || !value.includes('.')) {
      setEmailError("El email debe contener '@' y '.'")
    } else {
      setEmailError('')
    }
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)

    if (value.length < 8) {
      setPasswordError('La contraseña debe tener mínimo 8 caracteres')
    } else {
      setPasswordError('')
    }
  }

  const isSubmitDisabled = useMemo(() => {
    const anyError = Boolean(usernameError || emailError || passwordError)
    const anyEmpty = !username || !email || !password
    return anyError || anyEmpty
  }, [usernameError, emailError, passwordError, username, email, password])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitDisabled) {
      alert('No se puede enviar: hay errores o campos vacíos')
      return
    }

    alert(`Enviado ✅\nUsername: ${username}\nEmail: ${email}`)
  }

  return (
    <main style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>Tarea 8 - Miniretillo</h1>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 10 }}>
        <label style={{ display: 'grid', gap: 6 }}>
          Username
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            placeholder="mínimo 7 caracteres"
            style={{ padding: 10, borderRadius: 10, border: '1px solid #bbb' }}
          />
        </label>
        {usernameError && <p style={{ color: 'red', marginTop: -6 }}>{usernameError}</p>}

        <label style={{ display: 'grid', gap: 6 }}>
          Email
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="tu@email.com"
            style={{ padding: 10, borderRadius: 10, border: '1px solid #bbb' }}
          />
        </label>
        {emailError && <p style={{ color: 'red', marginTop: -6 }}>{emailError}</p>}

        <label style={{ display: 'grid', gap: 6 }}>
          Password
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="mínimo 8 caracteres"
            style={{ padding: 10, borderRadius: 10, border: '1px solid #bbb' }}
          />
        </label>
        {passwordError && <p style={{ color: 'red', marginTop: -6 }}>{passwordError}</p>}

        <button
          type="submit"
          disabled={isSubmitDisabled}
          style={{
            marginTop: 6,
            padding: '10px 12px',
            borderRadius: 12,
            border: 'none',
            background: isSubmitDisabled ? '#999' : '#111',
            color: 'white',
            fontWeight: 700,
            cursor: isSubmitDisabled ? 'not-allowed' : 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </main>
  )
}
