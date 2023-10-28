import { createSlice } from '@reduxjs/toolkit';
import { teaItems } from './dummy_text/teastext';
import { teaware_text } from './dummy_text/teaware_text';
import { loose_leaf_tea_text } from './dummy_text/loose_leaf_tea';
import { tea_bags_text } from './dummy_text/tea_bags_text';


const categories = {
    'Teas':teaItems,
     'TeaWare': teaware_text,
    'loose leaf tea': loose_leaf_tea_text,
    'Tea Bags': tea_bags_text,
};

const sortFunctions = {
    featured: (a, b) => (a.featured > b.featured ? -1 : 1),
    newest: (a, b) => (new Date(b.date_created) - new Date(a.date_created)),
    bestselling: (a, b) => (a.total_sales > b.total_sales ? -1 : 1),
    atoz: (a, b) => a.title.localeCompare(b.title),
    ztoa: (a, b) => b.title.localeCompare(a.title),
    priceasc: (a, b) => a.newPrice - b.newPrice,
    pricedesc: (a, b) => b.newPrice - a.newPrice,
  };

const initialState = {
    items:[...teaItems],
    filteredItems:{} ,
    itemsperPage:9,
    cloneItems:[...teaItems]
    
};

export const pageContentSlice = createSlice({
    name: 'pagecontents',
    initialState,
    reducers: { 
       setItemsByCategory: (state, action) => {
        
            const category = categories[action.payload]
            if(category) {
                state.items = [...category]
                state.cloneItems = [...category]
            } else {
                console.log('Category Not Found')
            }
        },
       changeProductPerpage:(state, action) => {
            state.itemsperPage = action.payload
       },
       showMore: (state) => {
            const { items, itemsperPage } = state;
            const newItemsPerPage = itemsperPage + itemsperPage;
            state.itemsperPage = Math.min(newItemsPerPage, items.length);
      },
        setsortItems:(state, action) => {
        const sortByValue = action.payload;
        state.items = state.items.sort(sortFunctions[sortByValue] || (() => 0));
        },

        setfilterItems:(state, action) =>{
                const categoryName = action.payload.categoryName;
                const itemName = action.payload.itemName.toLowerCase();
                const colorCode = action.payload.colorCode;

                if (action.payload.checked && !state.filteredItems[itemName]) {
                    state.filteredItems[itemName] = action.payload;
                } else if(itemName === 'price') {
                    
                    state.filteredItems.price.value = action.payload.value
                } else {
                    delete state.filteredItems[itemName];
                }

                let result = [];

                Object.values(state.filteredItems).map((item) => {
                    switch (item.categoryName) {
                        case 'Size':
                            console.log('Size called')
                            result = [...result, ...state.cloneItems.filter((fil) => fil.sizes.includes(item.itemName.toLowerCase()))]
                           
                            break;
                        case 'Color':
                            console.log('Color Called')
                            result = [...result, ...state.cloneItems.filter((fil) => fil.colors.includes(item.colorCode))]
                            break;
                        case 'Other':
                            if(item.itemName === 'Has Free Shipping'){
                                result = [...result, ...state.cloneItems.filter((fil) => fil.shipping_taxable === true )]
                            } else if(item.itemName === 'Is Featured') {
                                result = [...result, ...state.cloneItems.filter((fil) => fil.featured === true )]
                            } else if(item.itemName === 'In Stock' ) {
                                result = [...result, ...state.cloneItems.filter((fil) => fil.stock_status === 'instock' )]
                            } else {
                                console.log('I am default');
                            }
                        case 'price':
                            // state.items = state.items.filter((fil) => fil.newPrice <= item.value)
                            
                            result = result.filter((fil) => fil.newPrice <= item.value )
                            
                            console.log('price', result)
                            
                            break;
                            
                        default:
                            console.log('i am default 2');
                            break;
                    }

                    result = Array.from(new Set(result.map((item) => item.id))).map((id) => {
                        return result.find((item) => item.id === id);
                      });
                    console.log('main result', result)
                });

                if(result.length === 0){
                   state.items = [...state.cloneItems]
                } else {
                    state.items = [...result];
                }     
        },
    },
});

export const { setItemsByCategory, changeProductPerpage, showMore, setsortItems, setfilterItems } = pageContentSlice.actions;

export default pageContentSlice.reducer;




