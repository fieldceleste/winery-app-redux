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
});