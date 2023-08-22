import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from '../shared/components/tooltip/tooltip.module';



@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent
    ],
  imports: [
    RouterModule, TooltipModule
  ],

  exports: [
    MainComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
