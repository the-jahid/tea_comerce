const { createSlice } = require("@reduxjs/toolkit");
const { teaItems } = require("./dummy_text/teastext");
const { looseLeafTeaitems } = require("@/components/shared_components/Navbar/navbarutils");
const { tea_bags_text } = require("./dummy_text/tea_bags_text");
const { teaware_text } = require("./dummy_text/teaware_text");


const initialState = {
    items:[...teaItems, ...looseLeafTeaitems, ...tea_bags_text,...teaware_text ],
    resultItems:[]
}

export const allProductSlice = createSlice({
    name:'allproducts',
    initialState,
    reducers:{
        setsearchItems:(state, action) => {
            state.resultItems = state.items.filter((item) => {
                const text = item.title !== undefined ? item.title.toLowerCase() : 'nothing' ;
                
                if(text.startsWith(action.payload)){
                    return true;
                } else {
                    return false;
                } 
            })
        },
        clearPreviousResult: (state) => {
            state.resultItems = []
        }
        
    }
})


export default allProductSlice.reducer

export const {setsearchItems, clearPreviousResult} = allProductSlice.actions
