import { Component, ElementRef, Inject, InjectionToken } from "@angular/core";
import { Tooltip } from "../tooltip";

export const OVERLAP_TOKEN = new InjectionToken<HTMLElement>('OVERLAP_TOKEN')
export const OVERLAY_TARGET_TOKEN = new InjectionToken<HTMLElement>('OVERLAY_TARGET_TOKEN')

@Component({
  selector: 'ocb-tooltip',
  templateUrl: './tooltip-container.html',
  styleUrls: ['./tooltip-container.scss']
})
export class OCBTooltipContainer {
  constructor(@Inject(OVERLAP_TOKEN) public overlap: HTMLElement,
  @Inject(OVERLAY_TARGET_TOKEN) public tooltip: Tooltip) {
    console.log("Target ", this.tooltip.contentRef);
    console.log("overlap ", this.overlap.getBoundingClientRect() );

    const rect = this.overlap.getBoundingClientRect();
  }
}
