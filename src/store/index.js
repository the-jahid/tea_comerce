'use client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { pageContentSlice } from './page_contentSlice';
import { allProductSlice } from './allProductSlice';
import { cartSlice } from './cartSlice';
import {showMenuSlice} from './showMenuSlice';

const store = configureStore({
  reducer: {
    pagecontentItems:pageContentSlice.reducer,
    allproducts:allProductSlice.reducer,
    cartItems:cartSlice.reducer,
    showMenu:showMenuSlice.reducer
  },
})

export const ReduxProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}




