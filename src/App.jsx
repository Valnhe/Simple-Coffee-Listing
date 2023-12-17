import './App.css'
import coffes from './mocks/coffes.json'
import Card  from './components/Card'

export default function App() {
  return (
    <div className='container-app'>
      <main>
        <h1>Our Collection</h1>
        <p>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
        <ul className="coffes">
          <Card products={coffes}/>
        </ul>
      </main>
    </div>
  )
}