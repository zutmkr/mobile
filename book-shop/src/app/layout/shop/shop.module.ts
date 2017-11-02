import { NgModule } 		 from '@angular/core';
import { CommonModule } 	 from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';

import { TranslateModule }   from '@ngx-translate/core';

import { ShopComponent } 	 from './shop.component';

import { 
	BookElementComponent
} from "app/shared";

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
  	TranslateModule
  ],
  declarations: [
  	ShopComponent,
  	BookElementComponent
  ]
})
export class ShopModule { }
