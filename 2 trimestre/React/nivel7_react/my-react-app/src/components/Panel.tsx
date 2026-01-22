import { useState, type ChangeEvent } from 'react'
import Contador from './Contador'

export default function Panel() {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [count, setCount] = useState<number>(0)
  const [mode, setMode] = useState<string>('')

  const toggle = () => setIsVisible((v) => !v)

  const increment = () => setCount((c) => c + 1)
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0))

  const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMode(e.target.value)
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <h2>Panel de control</h2>

      <button onClick={toggle}>
        {isVisible ? 'Ocultar' : 'Mostrar'} sección
      </button>

      {isVisible && (
        <section style={{ background: '#f6f6f6', padding: 12, borderRadius: 8 }}>
          <p>
            <strong>Esta sección aparece y desaparece</strong>.
          </p>
        </section>
      )}

      <Contador count={count} onIncrement={increment} onDecrement={decrement} />

      <section style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
        <h3>Modo</h3>

        <input
          type="text"
          placeholder="stealth / turbo / chill..."
          value={mode}
          onChange={handleModeChange}
        />

        <p style={{ marginTop: 10 }}>
          Modo actual: <strong>{mode || '...'}</strong>
        </p>
      </section>
    </div>
  )
}
