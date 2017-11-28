import {Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {BooksComponent} from "./books/books.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from "./users/users.component";

export const routes: Routes = [
    {
        component: AdminComponent,
        path: "",
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            { path: "dashboard", component: DashboardComponent },
            { path: "books", component: BooksComponent },
            { path: "users", component: UsersComponent },
      ]
    }
];
