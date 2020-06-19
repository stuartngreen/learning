import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology.component';
import { ProductsComponent } from './products/products.component';
import { PassportComponent } from './products/passport/passport.component';
import { IsaacComponent } from './products/isaac/isaac.component';
import { ViaComponent } from './products/via/via.component';
import { SharedServicesComponent } from './products/shared-services/shared-services.component';
import { EmeaComponent } from './products/emea/emea.component';
import { SoftwareEngineeringLevelsComponent } from './software-engineering-levels/software-engineering-levels.component';
// tslint:disable-next-line:max-line-length
import { SoftwareEngineeringEmployeeComponent } from './software-engineering-levels/software-engineering-employee/software-engineering-employee.component';

const routes: Routes = [
  { path: '', component: TechnologyComponent, children: [
    { path: 'products', component: ProductsComponent, children: [
      { path: 'passport', component: PassportComponent },
      { path: 'isaac', component: IsaacComponent },
      { path: 'via', component: ViaComponent },
      { path: 'shared-services', component: SharedServicesComponent },
      { path: 'emea', component: EmeaComponent },
    ]},
    { path: 'software-engineering-levels', component: SoftwareEngineeringLevelsComponent, children: [
      { path: 'employees/:level', component: SoftwareEngineeringEmployeeComponent }
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
