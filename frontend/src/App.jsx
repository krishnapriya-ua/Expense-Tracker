import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Homepage from './presentation/pages/home'
import Signup from './presentation/pages/signup'
import Login from './presentation/pages/login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
