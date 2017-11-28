import {Component, OnInit} from "@angular/core";
import { Store } from "@ngrx/store";
import {LoadBooksAction} from "./store/actions/books.actions";
import {IApplicationState} from "./store/application-state";

@Component({
    selector: "app-admin",
    styleUrls: ["admin.component.scss"],
    templateUrl: "./admin.component.html"
})
export class AdminComponent implements OnInit{

  constructor(private store: Store<IApplicationState>) {

      store.subscribe(
        (state) => console.log(state)
      );
  }
  public ngOnInit(): void {
      let books = {
          [1]: {title: "title 1"},
          [2]: {title: "title 2"}
      };
      this.store.dispatch(new LoadBooksAction(books));
  }

}
