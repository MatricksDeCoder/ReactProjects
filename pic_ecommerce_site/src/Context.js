import React, {useState, useEffect} from "react"

const Context = React.createContext();

const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

const ContextProvider = ({children}) => {

    const [photos, setPhotos] = useState([]);
    const [cart, setCart]     = useState([]);

    const addToCart     = (newItem) => {
        setCart(prevItems => [...prevItems, newItem])
    }

    const removeFromCart  = (id) => {
        setCart(prevItems => prevItems.filter(item => item.id !== id))
    }

    const toggleFavorite = (id) => {
        const newPhotos = photos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorited: !photo.isFavorited
                }
            }
            return photo;
        })

        setPhotos(newPhotos);
    }    

    const emptyCart = () => {
        setCart(prev => [])
    }

    useEffect(() => {
        fetch(url).then(response => response.json())
                  .then(data => setPhotos(data));
    }, []); //runs once 
    
    console.log(photos)
    return (
        <Context.Provider value = {{photos, toggleFavorite, addToCart, cart, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}