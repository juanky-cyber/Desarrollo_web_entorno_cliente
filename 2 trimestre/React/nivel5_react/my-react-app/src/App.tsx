import { useState } from "react";

type User = { name: string };

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [newEmails, setNewEmails] = useState(0);

  const button = user ? (
    <button onClick={() => setUser(null)}>Logout</button>
  ) : (
    <button onClick={() => setUser({ name: "Antoñico" })}>Login</button>
  );

  return (
    <>
      <h1>Nivel 5: Renderizado condicional</h1>

      {button}

      {user ? (
        <p>Bienvenido, {user.name}.</p>
      ) : (
        <p>Inicia sesión para continuar.</p>
      )}
      <hr />
      <button onClick={() => setNewEmails((n) => n + 1)}>+1 email</button>
      <button onClick={() => setNewEmails(0)}>Reset</button>
      {newEmails > 0 && <h2>Tienes {newEmails} correos nuevos.</h2>}
    </>
  );
}
