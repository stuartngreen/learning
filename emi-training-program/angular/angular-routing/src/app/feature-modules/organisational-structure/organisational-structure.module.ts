import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../components/shared/shared.module';
import { OrganisationalStructureRoutingModule } from './organisational-structure-routing.module';
import { OrganisationalStructureComponent } from './organisational-structure.component';
import { SalesAndMarketingComponent } from './sales-and-marketing/sales-and-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';

@NgModule({
  declarations: [
    OrganisationalStructureComponent,
    SalesAndMarketingComponent,
    HumanResourcesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrganisationalStructureRoutingModule
  ]
})
export class OrganisationalStructureModule {
  constructor() {
    console.log('OrganisationalStructureModule loaded.');
  }
}
