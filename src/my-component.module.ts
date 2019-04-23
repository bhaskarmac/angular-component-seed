import { NgModule } from '@angular/core';
import { MyComponent } from './components';

@NgModule({
  providers: [
  ],
  declarations: [
    MyComponent,
  ],
  exports: [
    MyComponent,
  ]
})
export class MyComponentModule {
}
