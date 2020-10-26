export const initialState={
    basket:[],
    user:null
}

//selector
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer =(state,action)=>{
    console.log(action);
   switch(action.type){
       case 'ADD_TO_BASKET':
             //Logic from adding item to basket

                return {
                    ...state,
                    basket:[...state.basket,action.item]
                };
             
       case  'REMOVE_FROM_BASKET':
             //Removing item from to basket
             let newBasket=[...state.basket] //current basket
             //we clone the busket
             const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
             
             if(index>=0){
                 //remove item from new busket
                newBasket.splice(index,1);
            }
             return {...state,
              basket: newBasket};
             
       default:
           return state;      
   }

}
export default reducer;