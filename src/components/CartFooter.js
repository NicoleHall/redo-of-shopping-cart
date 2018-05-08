import React from 'react';

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a calssName="navbar-brand" href="https://www.cnn.com">{props.copyright}</a>
    </nav>
  )
}

export default CartFooter
