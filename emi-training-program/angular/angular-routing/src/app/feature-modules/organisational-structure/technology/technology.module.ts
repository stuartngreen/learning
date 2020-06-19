import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../components/shared/shared.module';
import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { ProductsComponent } from './products/products.component';
import { PassportComponent } from './products/passport/passport.component';
import { SoftwareEngineeringLevelsComponent } from './software-engineering-levels/software-engineering-levels.component';
import { IsaacComponent } from './products/isaac/isaac.component';
import { ViaComponent } from './products/via/via.component';
import { SharedServicesComponent } from './products/shared-services/shared-services.component';
import { EmeaComponent } from './products/emea/emea.component';
import { SoftwareEngineeringEmployeeComponent } from './software-engineering-levels/software-engineering-employee/software-engineering-employee.component';

@NgModule({
  declarations: [
    TechnologyComponent,
    ProductsComponent,
    SoftwareEngineeringLevelsComponent,
    PassportComponent,
    IsaacComponent,
    ViaComponent,
    SharedServicesComponent,
    EmeaComponent,
    SoftwareEngineeringEmployeeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule {
  constructor() {
    console.log('TechnologyModule loaded.');
  }
}
