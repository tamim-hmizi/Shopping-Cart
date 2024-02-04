import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

import { useState } from 'react'
import Footer from './components/Footer'
function App() {
    const [nbItems, setNbItems] = useState(0)
    return (
        <div className="app">
            <Nav nbItems={nbItems} />
            <main>
                <Outlet context={setNbItems} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default App
