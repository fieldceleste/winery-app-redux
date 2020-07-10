import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {name, brand, price, abv, quantity, id} = action;
  switch (action.type){
    case c.SELECT_KEG:
      if(state === null) {
        return {
          name: name,
          brand: brand,
          price: price,
          abv:abv, 
          quantity:quantity,
          id: id
          }
      } else {
        state = null;
        return state
        }
    default:
      return state;
  }
};