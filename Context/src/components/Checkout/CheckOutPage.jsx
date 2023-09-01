import React from 'react'
import BtnCheckout from './BtnCheckOut'

const CheckOutPage = () => {
    const currency = "USD"
  return (
    <div>
      <h1>CheckOutPage</h1>
      <BtnCheckout 
      currency={currency}
      showSpinner={false}
      />
      
    </div>
  )
}

export default CheckOutPage
