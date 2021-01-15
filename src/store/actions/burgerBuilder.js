import * as actionTypes from './actionsTypes'

export const addIngredient = (ingName) => {
    return {type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}
}

export const removeIngredient = (ingName) => {
    return {type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName}
}