import React from 'react';

const CartItem = ({ cartItem }) => {
  return(
    <div class="collection-item">
      <div class="row">
        <div class="col-md-8">{cartItem.product.name}</div>
        <div class="col-md-2">{cartItem.product.priceInCents/100}</div>
      <div class="col-md-2">{cartItem.quantity}</div>
    </div>
  </div>
  )
}

export default CartItem
