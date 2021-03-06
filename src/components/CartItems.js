import React from 'react'
import CartItem from './CartItem'

const CartItems = ({itemsPanoply}) => {
  let itemList = itemsPanoply.map(cartItem => <CartItem key={cartItem.id} cartItem={ cartItem }/>)

  const prices = itemsPanoply.map(itemDataObj=> itemDataObj.product.priceInCents)

  const totalPrice = prices.reduce((acc, cur) => acc + cur)

  const priceConverter = price => price / 100

  return(
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        <div>{ itemList }</div>
        <br/>
        <div>Total ${ priceConverter(totalPrice) } </div>
      </div>
    </div>
  )
}

export default CartItems
