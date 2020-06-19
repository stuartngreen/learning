import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ContentContainerComponent
  ],
  exports: [
    FormsModule,
    NavigationComponent,
    ContentContainerComponent
  ]
})
export class SharedModule { }
