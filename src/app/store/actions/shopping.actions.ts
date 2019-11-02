import {Action} from "@ngrx/store";
import {ShoppingItem} from "../../model/shoppingItem.model";

export enum ShoppingActionType{
 ADD_ITEM = '[Shopping] Add Item',
 ADD_ITEM_SUCCESS = '[Shopping] Add Item Success',
 ADD_ITEM_FAILURE = '[Shopping] Add Item Failure',
 REMOVE_ITEM ='[Shopping] Remove Item'
}



export class AddItemAction implements Action{
  type:string= <string>ShoppingActionType.ADD_ITEM;
  constructor(public payload: ShoppingItem){}
}

export class RemoveItem implements Action{
  type:string=<string> ShoppingActionType.REMOVE_ITEM;
  constructor(public payload: number){}
}

export type ShoppingAction = AddItemAction | RemoveItem;
