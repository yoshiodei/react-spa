export const addToCart = (newItem) => {
    return {
        type: "ADD_TO_CART",
        payload: newItem
    }
}