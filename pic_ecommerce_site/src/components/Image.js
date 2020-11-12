import React, {useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {

    const [isHovered, ref] = useHover();

    const {toggleFavorite, cart, addToCart, removeFromCart} = useContext(Context);

    const heartFavorited = <i 
                    className="ri-heart-fill favorite"
                    onClick = {() => toggleFavorite(img.id)}
                   ></i>

    const heart = <i 
                   className="ri-heart-line favorite"
                   onClick = {() => toggleFavorite(img.id)}
                  ></i>

    const heartIcon = () => {
        if(img.isFavorited) {
            return heartFavorited
        } else if(isHovered) {
            return heart
        }
    }    

    const cartIcon = () =>  {
        const alreadyInCart = cart.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            ref = {ref}
        >  
        {heartIcon()}
            <img 
                src={img.url} 
                className="image-grid" 
                alt = "buy this"
            />
        {cartIcon()}
        </div>
    )

}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorited: PropTypes.bool
    })
}

export default Image