import { useState } from 'react'
import './App.css'

import coffes from './mocks/coffes.json'
import Card  from './components/Card'

export default function App() {
  const [filter, setFilter] = useState("all")

  const handleAvailable = () => {
    setFilter("available")
  }

  const handleAll = () => {
    setFilter("all")
  }

  const filterCoffes = (coffes) => {
    return filter === "available" ? coffes.filter((coffe) => coffe.available) : coffes
  }

  const filteredCoffes = filterCoffes(coffes)

  return (
    <div className='container-app'>
      <main>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <nav>
          <button onClick={handleAll} className={filter === 'all' ? 'active' : ''}>All Products</button>
          <button onClick={handleAvailable} className={filter === 'available' ? 'active' : ''}>Available Now</button>
        </nav>
        <ul className="coffes">
          <Card products={filteredCoffes}/>
        </ul>
      </main>
    </div>
  )
}