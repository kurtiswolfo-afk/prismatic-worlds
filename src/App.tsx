import Header from './components/Header'
import SecHead from './components/SecHead'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <SecHead />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to my website
        </h1>

        <p className="mt-4 text-gray-600">
          This is my new React website.
        </p>
      </main>

    </div>
  )
}

export default App