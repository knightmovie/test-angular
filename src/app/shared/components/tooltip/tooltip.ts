import { ElementRef, TemplateRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss']
})
export class Tooltip {
  @ViewChild(TemplateRef) contentRef: TemplateRef<any>;

  constructor() {

  }
}
