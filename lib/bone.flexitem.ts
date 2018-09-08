import { Directive, Input } from '@angular/core';
import { BoneBase } from './base';

@Directive({
  selector: '[bon-flex-item]'
})
export class BoneFlexItem extends BoneBase {

  @Input('bon-flex-item-order')
  public order: number;

  @Input('bon-flex-item-grow')
  public grow: number;

  @Input('bon-flex-item-shrink')
  public shrink: number;

  @Input('bon-flex-item-basis')
  public basis: number | string;

  @Input('bon-flex-item-align')
  public align: string;

  @Input('bon-flex-item-order-sm')
  public orderSm: number;

  @Input('bon-flex-item-grow-sm')
  public growSm: number;

  @Input('bon-flex-item-shrink-sm')
  public shrinkSm: number;

  @Input('bon-flex-item-basis-sm')
  public basisSm: number | string;

  @Input('bon-flex-item-align-sm')
  public alignSm: string;

  @Input('bon-flex-item-order-md')
  public orderMd: number;

  @Input('bon-flex-item-grow-md')
  public growMd: number;

  @Input('bon-flex-item-shrink-md')
  public shrinkMd: number;

  @Input('bon-flex-item-basis-md')
  public basisMd: number | string;

  @Input('bon-flex-item-align-md')
  public alignMd: string;

  @Input('bon-flex-item-order-lg')
  public orderLg: number;

  @Input('bon-flex-item-grow-lg')
  public growLg: number;

  @Input('bon-flex-item-shrink-lg')
  public shrinkLg: number;

  @Input('bon-flex-item-basis-lg')
  public basisLg: number | string;

  @Input('bon-flex-item-align-lg')
  public alignLg: string;

  @Input('bon-flex-item-order-xl')
  public orderXl: number;

  @Input('bon-flex-item-grow-xl')
  public growXl: number;

  @Input('bon-flex-item-shrink-xl')
  public shrinkXl: number;

  @Input('bon-flex-item-basis-xl')
  public basisXl: number | string;

  @Input('bon-flex-item-align-xl')
  public alignXl: string;

  public applyLayout(): void {
    const flexItemStyle = {
      flexOrder: this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]),
      flexGrow: this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]),
      flexShrink: this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]),
      flexBasis: this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
    };

    Object.assign(this.el.nativeElement.style, flexItemStyle);
  }

  public getAssignedStyles(): Array<string> {
    return ['order', 'grow', 'shrink', 'basis', 'align'];
  }
}
