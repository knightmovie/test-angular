import { Directive, ElementRef, InjectionToken, Injector, Input, ViewContainerRef } from "@angular/core";
import {Overlay, OverlayConfig, OverlayContainer, OverlayRef} from '@angular/cdk/overlay';
import { ComponentPortal } from "@angular/cdk/portal";
import { OCBTooltipContainer, OVERLAP_TOKEN, OVERLAY_TARGET_TOKEN } from "./container/tooltip-container";
import { Tooltip } from './tooltip';

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
  @Input('tooltipTarget') tooltip: Tooltip;
  overlayRef!: OverlayRef;


  constructor(private _overlay: Overlay,
    private _overlayContainer: OverlayContainer,
    private _containerView: ViewContainerRef) {
  }

  private _showTooltip() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

    this.overlayRef = this._overlay.create(this._getOverlayConfig());
    this.overlayRef.attach(this._getComponentPortal());
  }

  _onMouseenter() {
    console.log('Mouse hover', this.overlap);
    this._showTooltip();
  }

  _onMouseleave() {
    console.log('Mouse leave', this.overlap);

    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }



  private _getOverlayConfig() {
    const config: OverlayConfig = new OverlayConfig({
      hasBackdrop: false,
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._overlayContainer.getContainerElement()).withPositions([
        { originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom' }
      ]),
      backdropClass: '',
    });

    return config;
  }


  private _getComponentPortal() {
    const portal = new ComponentPortal<OCBTooltipContainer>(
      OCBTooltipContainer,
      null,
      Injector.create({
        providers: [
          { provide: OVERLAP_TOKEN, useValue: this.overlap.elementRef.nativeElement },
          { provide: OVERLAY_TARGET_TOKEN , useValue: this.tooltip}
        ]
      })
    );

    return portal;
  }

}

