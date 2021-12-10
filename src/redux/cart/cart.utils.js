export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, cartItemToRemove);
    }

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    }

    return [...cartItems];
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const updatedcartItems = cartItems.filter(
            cartItem => {console.log("- " + cartItem); return cartItem.id !== cartItemToClear.id;}
    );

    return [...updatedcartItems];
}