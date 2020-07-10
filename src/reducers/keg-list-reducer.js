import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, abv, quantity, id } = action;
  switch (action.type) {
  case c.ADD_KEG:
    return Object.assign({}, state, {
      [id]: {
      name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity:quantity,
      id: id
      }
    });
  case 'DELETE_KEG':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};