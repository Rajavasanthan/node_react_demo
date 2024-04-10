
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import List from './List'
import Create from './Create'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/create' element={<Create/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
