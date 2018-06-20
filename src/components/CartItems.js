import React from 'react'
import CartItem from './CartItem'

class CartItems extends React.Component {

  state = {
    itemsPanoply: []
  }

  //let itemList = state.itemsPanoply.map(cartItem => <CartItem key={cartItem.id} cartItem={ cartItem }/>)

  const prices = itemsPanoply.map(itemDataObj=> itemDataObj.product.priceInCents)

  const totalPrice = prices.reduce((acc, cur) => acc + cur)

  const priceConverter = price => price / 100

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/products')
    const json = await response.json()
    this.setState({itemsPanoply: json})
  }



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
