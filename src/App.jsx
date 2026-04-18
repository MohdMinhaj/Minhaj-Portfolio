import {  } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


function App() {
 

  return (
    <div>
   
     <Navbar />
      <AppRouter />
      <ToastContainer />
    </div>
  )
}

export default App
