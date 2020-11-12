import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cart, emptyCart} = useContext(Context)
    const cartItemElements = cart.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = 5.99 * cart.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    // <number>.toLocaleString("en-US", {style: "currency", currency: "USD"})`

    const placeOrders = () => {
        setButtonText("Ordering...")
        setTimeout(()=> {
            console.log("Order Placed")
            setButtonText("Place Order")
            emptyCart();
        }, 3000)
    }
   
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cart.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrders}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart