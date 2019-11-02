import {State} from "@ngrx/store";
import {Action} from '@ngrx/store';
import {initialState} from '../state/shoppingItem.state';
import {ShoppingAction, ShoppingActionType} from '../actions/shopping.actions';
import {ShoppingItem} from "../../model/shoppingItem.model";

export function ShoppingItemReducer(state:Array<ShoppingItem>= initialState, action:ShoppingAction = null){
  switch(action.type){
    case ShoppingActionType.ADD_ITEM:
          return [...state, action.payload]
    case ShoppingActionType.REMOVE_ITEM:

          return state.filter(item=>item['id']!=action.payload)
    default:
          return state;
  }
}
