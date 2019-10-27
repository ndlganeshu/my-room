// import { composeEnhancers } from 'redux-devtools-extension';
import { compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { ImyState } from './store.types';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(rootReducer, composeEnhancers());
// const store = createStore<ImyState>(rootReducer, {todos:[]});
// export default store;
