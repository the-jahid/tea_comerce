const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items:{},
    allitemsCount:0,
    subtotal:0,
    total:0
}

export  const cartSlice = createSlice({
    name:'cartItems',
    initialState,
   reducers:{
    addTocart:(state, action) => {

        const id = action.payload.id;
        if(!state.items[id]){
            state.items[id] = action.payload;
        } else {
            console.log('I am here');
            state.items[id].quantity += 1
        }
    },

    removeFromCart:(state, action) => {
        console.log('remove from called')
        const id = action.payload;

       delete state.items[id]
        
    },
    addquantity:(state, action) => {

        const id = action.payload.id;

        if(state.items[id]){
            state.items[id].quantity += 1
        }
    },
    countAllItems:(state ) => {
        const data = Object.values(state.items);
        const total = data.reduce((acc, item) => acc + item.quantity, 0);
        state.allitemsCount = total;
    },

    countSubtotal: (state) => {
        const data = Object.values(state.items);
        const total = data.reduce((acc, item) => {
          const price = typeof item.price === 'number' ? item.price : 0;
          
          return acc + (price * item.quantity);
        }, 0);
        state.subtotal = total;
      },

    minusquantity:(state, action) => {
        
        const id = action.payload.id;

        if(state.items[id]){
            state.items[id].quantity -= 1
        }
    },
    countTotal:(state, action) => {

    }
   }
})

export default cartSlice.reducer;
export const {addTocart, removeFromCart, addquantity, minusquantity, countAllItems, countSubtotal} = cartSlice.actions



