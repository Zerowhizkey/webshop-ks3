export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "ADD_TO_QTY":
            return { ...state, cart: state.cart.map((c) => c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c) }
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
        case "DECREASE_FROM_CART":
            return { ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? c.qty = action.payload.qty : c.qty) }
        default:
            return state
    }
}