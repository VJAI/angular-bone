import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[bon-grid-item]'
})
export class BoneGridItem {

  constructor(private el: ElementRef) {}

  @Input('bon-grid-item')
  enable: boolean;

  col: string;
}
