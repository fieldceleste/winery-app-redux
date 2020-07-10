import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
// import selectedKegReducer from '../../reducers/selected-keg-reducer';
// import * as a from './../../actions/index';


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
});