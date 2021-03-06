import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('discussion forum actions', () => {
  
  test('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Chardonnay',brand: 'Celestes Winery',price: '4',abv:'3',quantity: '5',id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5',
      id: 1
    });
  });
  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });
  test('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg({id: 1, name: 'Chardonnay',brand: 'Celestes Winery', price: '4', abv: '3', quantity: '5', id: 1})).toEqual ({
      type: c.SELECT_KEG,
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5',
      id: 1
    });
  });
  test('buyGlass should create BUY_GLASS ', () => {
    expect(actions.buyGlass({name: 'Chardonnay', brand: 'Celestes Winery', price: '4',abv: '3', quantity: '5', id: 1 })).toEqual({
      type: c.BUY_GLASS,
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5', 
      id: 1
    });
  });
});