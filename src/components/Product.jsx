import React from 'react'

const Product = ( { img , price , title , id , count , residue , products , basket , setBasket } ) => {

  const buyItem = () => {
    let findItem = basket.find( item => item.id === id );
    if(findItem)
    {
      let temp = basket;
      let index = temp.findIndex( item => item.id === id );
      temp[index].count++;
      setBasket([...temp]);
    }
    else {
      setBasket([...basket,{
        id: id,
        img: img,
        price: price,
        count: 1,
      }]);
    }
  }

  const sellItem = (id) => {
    let findItem = basket.find( item => item.id === id );
    findItem.count--;
    if(findItem.count === 0)
    {
      setBasket([...basket.filter( item => item.id !== id )]);
    }
    else {
      setBasket([...basket]);
    }
  }

  return (
    <div className='product'>
        <img src={img} alt="#" />
        <h3>{title}</h3>
        <button onClick={ () => buyItem(id) } disabled={ residue < price ? true : false } className='buy'><i className="fa-solid fa-plus"></i></button>
        <input type="number" readOnly value={count} />
        <button onClick={ () => sellItem(id) } disabled={ !count ? true : false } className='sell'><i className="fa-solid fa-minus"></i></button>
        <h2>{price} AZN</h2>
    </div>
  )
}

export default Product