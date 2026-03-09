import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MyOffers from './components/MyOffers'


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__main">
        <Navbar />
        <MyOffers />
      </div>
    </div>
  )
}

export default App
