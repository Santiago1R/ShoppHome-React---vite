/**
 * This function calculates total prices of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} Total price
 */
export const totalPrices = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price)
    return sum.toFixed(2)
}