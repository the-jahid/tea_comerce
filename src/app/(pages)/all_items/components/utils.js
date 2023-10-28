import { megaMenuListItems } from "@/components/shared_components/Navbar/navbarutils";
import NumberTextBox from "./number_text_box";
import { RatingSection } from "./rating_section";


export const productCategories = [
    {
        id:1,
        name:'Teas',
        value:'teas',
        categoryItems:megaMenuListItems
    },
    {
        id:2,
        name:'TeaWare',
        value:'teaware',
        categoryItems:megaMenuListItems
    },
    {
        id:3,
        name:'loose leaf tea',
        value:'looseleaftea',
        categoryItems:megaMenuListItems
    },
    {
        id:4,
        name:'Tea Bags',
        value:'teabags',
        categoryItems:megaMenuListItems
    },
]


export const FILTER_CATEGORIES = [
    {
      name: 'Size',
      items: ['Extra Large', 'Large', 'Medium', 'Small']
    },
    {
      name: 'Color',
      items: [
       {colorName:'Beige', colorCode: '#F5F5DC'},
       {colorName:'Black', colorCode: '#000000'},
       {colorName:'Blue', colorCode: '#0000FF'},
       {colorName:'Brown', colorCode: '#A52A2A'},
       {colorName:'Dark Sea Green', colorCode: '#8FBC8F'},
       {colorName:'Gray', colorCode: '#808080'},
       {colorName:'Green', colorCode: '#008000'}, 
       {colorName:'Orange', colorCode: '#FFA500'},
       {colorName:'Pink', colorCode: '#FFC0CB'}, 
       {colorName:'Red', colorCode :'#FF0000'}, 
       {colorName:'Silver', colorCode: '#C0C0C0'} ,
       {colorName:'Yellow', colorCode: '#FFFF00'}
      ]
    },
    {
      name: 'Price',
      component: <NumberTextBox min={0} max={100000} />
    },
    {
      name: 'Rating',
      component: <RatingSection />
    },
    {
      name: 'Other',
      items: ['Has Free Shipping', 'Is Featured', 'In Stock']
    }
  ];


