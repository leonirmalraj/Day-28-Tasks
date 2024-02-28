import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import CartPage from './components/CartPage';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const App = () => {
  return (
    
    <Provider store={store}>
      <div className="App">
        <CartPage />
      </div>
    </Provider>
  );
};

export default App;
