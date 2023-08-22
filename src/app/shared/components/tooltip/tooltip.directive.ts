import { Directive, ElementRef, Input } from "@angular/core";
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';

@Directive({
  selector: '[tooltipOverlap]',
  exportAs: 'tooltipOverlap'

})
export class TooltipOverlap {
  constructor(public elementRef: ElementRef) {
  }
}


@Directive({
  selector: '[tooltipTarget]',
  host: {
    '(mouseenter)': '_onMouseenter()',
    '(mouseleave)': '_onMouseleave()'
  }
})
export class TooltipTarget {

  @Input('tooltipOverlap') overlap!: TooltipOverlap;
  @Input() 
  overlayRef!: OverlayRef;


  constructor() {
  }

  private _showTooltip() {

  }

  _onMouseenter() {
    console.log('Mouse hover', this.overlap)
  }

  _onMouseleave() {
    console.log('Mouse leave', this.overlap)
  }

}

