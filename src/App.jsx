import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
        <h1 className='text-center text-5xl font-black text-black'>Vite + React</h1>
        <Analytics />
        <Dashboard />
      </BrowserRouter>
  )
}

export default App
