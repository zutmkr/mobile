import {IBooks, INITIAL_BOOKS, INITIAL_USERS, IUsers} from "./store-data";

export interface IApplicationState {
    books: IBooks;
    users: IUsers;
}

export const INITIAL_APPLICATION_STATE: IApplicationState = {
    books: INITIAL_BOOKS,
    users: INITIAL_USERS
};
