import { buybooks,sellbooks } from "./Bookstore"; 


const initstate =  {

    NumberOfBooks : 20,
    bookName : '5 am club'
}


const bookReducer = (state=initstate, action) =>{ //accepts states and action as parameters

    switch(action.type){
        case buybooks :   
        return{
            ...state, NumberOfBooks : state.NumberOfBooks-1
        }

        case sellbooks :   
        return{
            ...state, NumberOfBooks : state.NumberOfBooks+1
        }


        default : return state
    }

}


export default bookReducer;
