import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="font-poppins bg-gray-100 h-screen overflow-auto">
      <BrowserRouter>
        <div className="pages">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
