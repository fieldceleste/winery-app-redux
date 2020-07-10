import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from './../../actions/index';

describe('kegListReducer', () => {
  let action;

  const currentState = { 
    1: { name: 'Chardonnay',
    brand: 'Celestes Winery',
    price: '4',
    abv: '3',
    quantity: '5',
    id: 1 },
    2:  { name: 'Merolot',
    brand: 'Toms Winery',
    price: '3',
    abv: '10',
    quantity: '8',
    id: 2 },
  } 
 
  const kegData = {
    name: 'Chardonnay',
    brand: 'Celestes Winery',
    price: '4',
    abv: '3',
    quantity: '5',
    id: 1 
  };


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, abv, quantity, id } = kegData;

    action = a.addKeg({
      name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity:quantity,
      id: id
    });
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
      name: name,
      brand: brand,
      price: price,
      abv:abv, 
      quantity:quantity,
      id: id
      }
    });
  });

  test('Should successfully delete a keg', () =>{
    action = a.deleteKeg(1);

   expect(kegListReducer(currentState, action)).toEqual({
    2: { 
    name: 'Merolot',
    brand: 'Toms Winery',
    price: '3',
    abv: '10',
    quantity: '8',
    id: 2  }
    });
  });

  test('decrement quantity on keg', () => {
    const {name, brand, price, abv, quantity, id} = kegData;
    const newQuantity = quantity - 1;
    action = a.buyGlass({
      id: 1,
      name: name,
      brand: brand,
      price: price,
      abv: abv, 
      quantity:quantity,
    })
    expect(kegListReducer(currentState, action)).toEqual({
      [id] : {
        id: id,
        name: name,
        brand: brand,
        price: price,
        abv:abv, 
        quantity:newQuantity,
      },
      2: { 
        name: 'Merolot',
        brand: 'Toms Winery',
        price: '3',
        abv: '10',
        quantity: '8',
        id: 2  }
    });
  });
});