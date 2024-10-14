import { createStore } from 'redux';
import moneyReducer from './moneyReducer';

const store = createStore(moneyReducer);

export default store;
