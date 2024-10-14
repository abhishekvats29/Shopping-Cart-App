const initialState = {
    balance: 1000, // Starting balance
    items: [
      { id: 1, name: 'Book', price: 100, image: '/images/book.png' },
      { id: 2, name: 'Pen', price: 10, image: '/images/pen.png' },
      { id: 3, name: 'Notebook', price: 50, image: '/images/notebook.avif' },
      { id: 4, name: 'Bag', price: 200, image: '/images/bag.jpg' }
    ],
    purchasedItems: []
  };
  
  const moneyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BUY_ITEM':
        return {
          ...state,
          balance: state.balance - action.payload.price,
          purchasedItems: [...state.purchasedItems, action.payload]
        };
      case 'ADD_MONEY':
        return {
          ...state,
          balance: state.balance + action.payload
        };
      case 'DELETE_ITEM':
        return {
          ...state,
          balance: state.balance + action.payload.price,
          purchasedItems: state.purchasedItems.filter(item => item.id !== action.payload.id)
        };
      default:
        return state;
    }
  };
  
  export default moneyReducer;
  