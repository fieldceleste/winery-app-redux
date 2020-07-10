import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions/index';

describe("selectedKegReducer", () => {
  let action;

  const currentState = {
    name: 'Chardonnay',
    brand: 'Celestes Winery',
    price: '4',
    abv: '3',
    quantity: '5',
    id: 1
  }

  test("should return default without recognized action type", () => {
    expect(selectedKegReducer(null, {type:null})).toEqual(null)
  })
  test("should select keg based on input", () => {
    action = a.selectKeg({
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5',
      id: 1
    });
    expect(selectedKegReducer(null, action)).toEqual( {
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5',
      id: 1
    });
  });
  test("should toggle off of selected keg", () => {
    action = a.selectKeg();
    expect(selectedKegReducer(currentState, action)).toEqual(null);
  });
});