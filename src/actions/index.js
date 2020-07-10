import * as c from './ActionTypes';

export const addKeg = (addKeg) => {
  const {name, brand, price, abv,quantity, id} = addKeg;
  return {
    type: c.ADD_KEG,
    name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity: quantity,
      id: id
  }
}
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})