import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './routes/PrivateRoute'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
