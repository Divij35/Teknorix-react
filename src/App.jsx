import './App.css'
import { Route, Routes } from 'react-router-dom'
import JobList from './components/JobList'
import JobDetails from './components/JobDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<JobList/>}/>
      <Route path='/job/:id' element={<JobDetails/>}/>
    </Routes>
  )
}

export default App