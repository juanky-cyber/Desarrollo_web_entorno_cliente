export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-black/10 p-6 shadow-sm">
        <h1 className="text-2xl font-bold sm:text-3xl">Tarjeta React</h1>

        <p className="mt-2 text-sm opacity-80 sm:text-base">
          No hace nada, pero que bonito y elegante verdad?
        </p>

        <button
          className="
            mt-4 rounded-xl px-4 py-2 font-semibold
            bg-black text-white
            transition
            hover:bg-gray-800 hover:shadow-md hover:underline
          "
        >
          Hola
        </button>
      </div>
    </main>
  )
}
