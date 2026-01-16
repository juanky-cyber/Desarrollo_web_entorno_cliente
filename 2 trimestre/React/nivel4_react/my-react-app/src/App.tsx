import { useState } from "react"

type ChildProps = {
  name: string
  age: number
  hobbies: string[]
  occupation: string
  greetings: () => string
  setName: React.Dispatch<React.SetStateAction<string>>
}

export default function App() {
  return <ParentComponent />
}

function ParentComponent() {
  const [name, setName] = useState("Juanaco")

  function greetings() {
    return "Vamos a beber unas birras viendo el Madrid"
  }

  const age = 24
  const hobbies = ["LOL", "Cerveza"]
  const occupation = "Esclavo de DAW2"

  return (
    <>
      <h1>Hola chavales, soy {name}</h1>
      <button onClick={() => setName("Juanky")}>Cambiar a Juanky</button>

      <ChildComponent
        name={name}
        age={age}
        hobbies={hobbies}
        occupation={occupation}
        greetings={greetings}
        setName={setName}
      />
    </>
  )
}

function ChildComponent(props: ChildProps) {
  return (
    <>
      <hr />
      <p>Hello bros! my name is {props.name}</p>
      <p>Edad: {props.age}</p>
      <p>Ocupación: {props.occupation}</p>
      <p>Hobbies: {props.hobbies.join(", ")}</p>
      <p>{props.greetings()}</p>

      <button onClick={() => props.setName("Juanky")}>Change Name a Juanky</button>
      <button onClick={() => props.setName("Itachi")}>Change Name a Itachi</button>
    </>
  )
}
