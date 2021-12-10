import { createSelector } from "reselect";

// This memoize selector avoids the component to be rendered (the cart icon component)
// avoids it to be re-rendered each time
// it is kind of a cache


// Input Selector
// function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
             accumulatedQuantity + cartItem.quantity,
             0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (totalCost, cartItem) =>
             totalCost + cartItem.quantity * cartItem.price,
             0
        )
);