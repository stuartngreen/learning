import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganisationalStructureComponent } from './organisational-structure.component';
import { SalesAndMarketingComponent } from './sales-and-marketing/sales-and-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';

const routes: Routes = [
  { path: '', component: OrganisationalStructureComponent, children: [
    {
      path: 'technology',
      loadChildren: () => import('../organisational-structure/technology/technology.module')
        .then(m => m.TechnologyModule)
    },
    { path: 'sales-and-marketing', component: SalesAndMarketingComponent },
    { path: 'human-resources', component: HumanResourcesComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationalStructureRoutingModule { }
