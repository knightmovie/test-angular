import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipOverlap, TooltipTarget } from './tooltip.directive';



@NgModule({
  declarations: [TooltipTarget, TooltipOverlap],
  imports: [
    CommonModule
  ],
  exports: [TooltipTarget, TooltipOverlap]
})
export class TooltipModule { }
