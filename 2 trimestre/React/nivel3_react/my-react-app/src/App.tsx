function App() {
  const users = [
    { id: 1, name: 'Jose', role: 'Web Developer' },
    { id: 2, name: 'Estefanía', role: 'Web Designer' },
    { id: 3, name: 'Rubén', role: 'Team Leader' },
    { id: 4, name: 'Mariam', role: 'Web Developer' }, 
  ]

  return (
    <>
      <p>Lista de usuarios activos:</p>
      <ul>
      {users.map(function (user) {
        return (
          <li
            key={user.id}
            className={user.role === 'Web Developer' ? 'dev' : 'other'}
          >
            {user.name} — {user.role}
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default App
