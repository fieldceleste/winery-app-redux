import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
// import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions/index';


let store = createStore(rootReducer);

describe('indexReducer', () => {
  
  test('Should return default state if no action type is recognized', () => {
   expect (rootReducer({}, {type: null})).toEqual({
     masterKegList:{},
     formVisibleOnPage: false,
    
    });
  });
  test('initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type: null}))
  });
  test('initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}))
  });
  // test('initial state of selectedKegReducer matches root reducer', () => {
  //   expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, {type: null}))
  // })
  test("Check that initial state of kegListReducer matches root reducer", () => {
     const action = a.addKeg({
      name: 'Chardonnay',
      brand: 'Celestes Winery',
      price: '4',
      abv: '3',
      quantity: '5',
      id: 1 
     });
     store.dispatch(action);
     expect(store.getState().masterKegList).toEqual(kegListReducer(undefined,action));
  });
  
  test('check that TOGGLE_FORM changes occur in formVisibleReducer and root reducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  
  });
});