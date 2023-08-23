import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipOverlap, TooltipTarget } from './tooltip.directive';
import { OCBTooltipContainer } from './container/tooltip-container';
import { Tooltip } from './tooltip';
import { PortalModule } from '@angular/cdk/portal';



@NgModule({
  declarations: [
    TooltipTarget,
    TooltipOverlap,
    OCBTooltipContainer,
    Tooltip],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    TooltipTarget,
    TooltipOverlap,
    OCBTooltipContainer,
    Tooltip
  ]
})
export class TooltipModule { }
