import {IActionWithPayload} from "../actions/action-payload";
import {IUsers} from "../store-data";

export function usersReducer(state: IUsers, action: IActionWithPayload): IUsers {
    switch (action.type)  {

        default:
            // console.log(state);
            return state;
    }
}
