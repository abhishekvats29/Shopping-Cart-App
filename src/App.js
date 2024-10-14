import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import './styles.css';

function App() {
  const balance = useSelector(state => state.balance);
  const items = useSelector(state => state.items);
  const purchasedItems = useSelector(state => state.purchasedItems);
  const dispatch = useDispatch();

  const handleBuy = (item) => {
    if (balance >= item.price) {
      dispatch({ type: 'BUY_ITEM', payload: item });
    } else {
      alert('Not enough balance!');
    }
  };

  const handleDelete = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: item });
  };

  return (
    <div className="App">
      <h1>Money Manager App</h1>
      <h2>Balance: ${balance}</h2>
      <h3>Available Items:</h3>
      <div className="container">
        {items.map(item => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleBuy(item)}>Buy</button>
          </div>
        ))}
      </div>
      <h3>Purchased Items:</h3>
      <ul className="purchased-list">
        {purchasedItems.map(item => (
          <li key={item.id}>
            {item.name}
            <button className="delete-button" onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default WrappedApp;
