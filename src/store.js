import reducer from './reducer.js';
import {createStore} from 'redux' 

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

export default store;