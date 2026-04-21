import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import UnitDetail from './pages/UnitDetail'
import Layout from './components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apartamentos" element={<Catalog />} />
          <Route path="/apartamentos/:id" element={<UnitDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
