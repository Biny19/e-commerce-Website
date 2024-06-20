import React, {useState, useEffect} from 'react'
import './RelatedProducts.css';
import Item from '../Item/Item'

const RelatedProducts = ({selectedCategory}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if(selectedCategory){
      fetch(`http://localhost:4000/relatedproducts?category=${selectedCategory}&limit=4`)
      .then((response) => response.json())
      .then((data) => setRelatedProducts(data))
      .catch((error) => console.error('Error fetching related products:', error));
    }
  },[selectedCategory])

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>   
         })}
      </div>
    </div>
  )
}

export default RelatedProducts;
