const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    searchState:false,
    menuState:false
}


export const showMenuSlice = createSlice({

    name:'showMenuSlice',
    initialState,
    reducers: {
        toggleSearchState:(state, action) => {

            if(action.payload === 'cardAction'){
                state.searchState = false
            } else {
                state.searchState = !state.searchState
            }

            
        },

        toggleMenuState:(state) => {
            state.menuState = !state.menuState
        }
    }
})


export default showMenuSlice.reducer;

export const {toggleSearchState, toggleMenuState, toggleteaState, toggleteaBagsState, toggleLooseLeafTeaState, toggleTeaWareState } = showMenuSlice.actions;

