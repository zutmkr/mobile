import {IActionWithPayload} from "./action-payload";

export const LOAD_BOOKS_ACTION = "LOAD_BOOKS_ACTION";

export class LoadBooksAction implements IActionWithPayload {

    public readonly type = LOAD_BOOKS_ACTION;

    constructor(public payload: {}) {
    }

}
