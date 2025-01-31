import { buybooks,sellbooks } from "./Bookstore"; 

export const purchaseBook = () => {
    return {
        type: buybooks,
       
    };
};



export const SellBook = () => {
    return {
        type: sellbooks,
       
    };
};
