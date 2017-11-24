import { NgModule }			 from '@angular/core';
import { RouterModule } 	 from '@angular/router';
import { TranslateModule }   from '@ngx-translate/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        AdminRoutingModule,
        RouterModule,
        TranslateModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule {}
