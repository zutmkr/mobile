import {IActionWithPayload} from "../actions/action-payload";
import {LOAD_BOOKS_ACTION} from "../actions/books.actions";
import {IBooks} from "../store-data";

export function booksReducer(state: IBooks, action: IActionWithPayload): IBooks {
    switch (action.type)  {

      case LOAD_BOOKS_ACTION:
           // console.log(action);
          return action.payload;

        default:
            return state;
    }
}
