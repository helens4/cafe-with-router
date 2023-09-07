import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import { useEffect, useState } from 'react';
import axios from 'axios'
import NotFound from './components/NotFound';

function App() {

  const [items, setItems] = useState([])

  const getItems = async () => {
    const response = await axios.get('http://localhost:3030/api/items')

    setItems(response.data)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
