import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

const Header = () => {

const {cart} = useContext(Context)

const cartIcon = () => {
    if(cart.length) {
        return <i className ="ri-shopping-cart-fill ri-fw ri-2x"></i>
    } else {
        return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    }
}

    return (
        <header>
            <h2><Link to ='/'>Pic Some</Link></h2>
            <Link to = '/cart'>{cartIcon()}</Link>
        </header>
    )
}

export default Header;