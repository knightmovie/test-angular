import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from './components/tooltip/tooltip.module';




@NgModule({

  exports: [
    TooltipModule
  ]
})
export class SharedModule { }
