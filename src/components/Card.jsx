import './Card.css';
import starFill from '../images/Star_fill.svg';
import starEmpty from '../images/Star.svg';

function Card({ products }) {
    return (
      products.map((product) => (
        <li className="card" key={product.id}>
          {product.popular && <p className='popular'>Popular</p>}
    
            <img src={product.image} alt={product.name} className='image'/>


            {/* First line desc */}
          <section className="container-info">
            <h3>{product.name}</h3>
            <p className='price'>{product.price}</p>
          </section>

            {/* Second line desc */}
          <section className="container-info">
            <section className="votes">

              {/* If exist rating */}
              {product.rating != null && 
                <>
                  <img src={starFill} alt="Star Fill" />
                  <span>{product.rating}</span>
                  <span className='grey'>({product.votes} votes)</span>
                </>
              }

              {/* If not exist rating */}
              {product.rating === null && 
                <>
                  <img src={starEmpty} alt="Star Empty" />
                  <span className='grey'>No ratings</span>
                </>
              }
            </section>

            {/* If its sould out */}
            {!product.available && <p className='sold-out'>Sold Out</p>}
        </section>
        
      </li>
      ))
  )
}

export default Card;