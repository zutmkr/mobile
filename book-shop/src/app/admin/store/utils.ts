import { Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

export interface IRouterStateUrl {
    url: string;
    queryParams: Params;
}

export class CustomRouterStateSerializer
    implements RouterStateSerializer<IRouterStateUrl> {
    public serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;

        return { url, queryParams };
    }
}
