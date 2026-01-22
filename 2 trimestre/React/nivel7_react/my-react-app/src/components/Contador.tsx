type ContadorProps = {
  count: number
  onIncrement: () => void
  onDecrement: () => void
}

export default function Contador({ count, onIncrement, onDecrement }: ContadorProps) {
  return (
    <section style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8 }}>
      <h3>Contador</h3>

      <p>
        Valor: <strong>{count}</strong>
      </p>

      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onDecrement} disabled={count === 0}>
          -1
        </button>
        <button onClick={onIncrement}>+1</button>
      </div>

      {count === 0 && <p style={{ marginTop: 10 }}>No baja de 0 </p>}
    </section>
  )
}
