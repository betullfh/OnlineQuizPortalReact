import './App.css'
import RouterConfig from './config/RouterConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
  <div>
    <RouterConfig/>
    <ToastContainer/>
  </div>
  )
}

export default App
