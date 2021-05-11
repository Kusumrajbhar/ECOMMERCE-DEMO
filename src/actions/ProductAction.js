import {actionTypes} from './ActionType'

export const setProducts = (products) => {
    return {
        type:  actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProducts = (product) => {
    return {
        type:  actionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
      type: actionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

  export const finish = () => {
      return {
          type:'FINISH'
      }
  }