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
export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const editKeg = (id) => ({
  type: c.EDIT_KEG,
  id
});

export const selectKeg =(mainKeg) => {
  if (mainKeg!= null) {
  const {name, brand, price, abv,quantity, id} = mainKeg;

  return{
   type: c.SELECT_KEG,
      name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity: quantity,
      id: id
  }
} else {
  return {
    type: c.SELECT_KEG
  }
 }
}
export const buyGlass = (mainKeg) => {
  const {name, brand, price, abv, quantity, id} = mainKeg;
  return{
   type: c.BUY_GLASS,
      name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity: quantity,
      id: id
  }
} 