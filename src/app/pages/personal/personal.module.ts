import { PersonalComponent } from './components/personal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalRoutingModule } from './personal-routing.module';



@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
