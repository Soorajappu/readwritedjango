// import HelloWorld from './HelloWorld'
import Main from './components/Main'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login  from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
