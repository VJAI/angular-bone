import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[bon-grid]'
})
export class BoneGrid {

  constructor(private el: ElementRef) {}

  @Input('bon-grid') enable: boolean;

  @Input('bon-grid-lg') enableLg: boolean;

  @Input('bon-grid-md') enableMd: boolean;

  @Input('bon-grid-sm') enableSm: boolean;

  @Input('bon-grid-xs') enableXs: boolean;

  @Input('bon-grid-cols') cols: number;

  @Input('bon-grid-lg-cols') colsLg: number;

  @Input('bon-grid-md-cols') colsMd: number;

  @Input('bon-grid-sm-cols') colsSm: number;

  @Input('bon-grid-xs-cols') colsXs: number;

  @Input('bon-grid-rows') rows: number;

  @Input('bon-grid-auto-rows') autoRows: number;

  @Input('bon-grid-auto-cols') autoCols: number;


}
