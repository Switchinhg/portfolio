import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />{/* Header */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
