import {NgModule} from "@angular/core";
import { RouterModule } 	 from "@angular/router";
import {routerReducer, RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {storeFreeze} from "ngrx-store-freeze";
import {routes} from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import {BooksComponent} from "./books/books.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {INITIAL_APPLICATION_STATE} from "./store/application-state";
import {booksReducer} from "./store/reducers/books.reducer";
import {usersReducer} from "./store/reducers/users.reducer";
import {CustomRouterStateSerializer} from "./store/utils";
import {UsersComponent} from "./users/users.component";

export const reducers = {
    books: booksReducer,
    users: usersReducer,
    routerReducer,
};

export const immutableGuard = [storeFreeze];

@NgModule({
    declarations: [AdminComponent, DashboardComponent, BooksComponent, UsersComponent],
    imports: [
        RouterModule.forChild(routes),
        StoreModule.forRoot(reducers, {metaReducers: immutableGuard, initialState: INITIAL_APPLICATION_STATE}),
        StoreRouterConnectingModule,
        StoreDevtoolsModule.instrument(),
    ],
     providers: [
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
    ],
})
export class AdminModule {}
