import { Directive, HostBinding, Input } from '@angular/core';
import { BoneBase } from './base';

@Directive({
  selector: '[bon-fi]'
})
export class BoneFlexItem extends BoneBase {

  @Input('bon-fi-order')
  public order: number;

  @Input('bon-fi-grow')
  public grow: number;

  @Input('bon-fi-shrink')
  public shrink: number;

  @Input('bon-fi-basis')
  public basis: number | string;

  @Input('bon-fi-align')
  public align: string;

  @Input('bon-fi-order-sm')
  public orderSm: number;

  @Input('bon-fi-grow-sm')
  public growSm: number;

  @Input('bon-fi-shrink-sm')
  public shrinkSm: number;

  @Input('bon-fi-basis-sm')
  public basisSm: number | string;

  @Input('bon-fi-align-sm')
  public alignSm: string;

  @Input('bon-fi-order-md')
  public orderMd: number;

  @Input('bon-fi-grow-md')
  public growMd: number;

  @Input('bon-fi-shrink-md')
  public shrinkMd: number;

  @Input('bon-fi-basis-md')
  public basisMd: number | string;

  @Input('bon-fi-align-md')
  public alignMd: string;

  @Input('bon-fi-order-lg')
  public orderLg: number;

  @Input('bon-fi-grow-lg')
  public growLg: number;

  @Input('bon-fi-shrink-lg')
  public shrinkLg: number;

  @Input('bon-fi-basis-lg')
  public basisLg: number | string;

  @Input('bon-fi-align-lg')
  public alignLg: string;

  @Input('bon-fi-order-xl')
  public orderXl: number;

  @Input('bon-fi-grow-xl')
  public growXl: number;

  @Input('bon-fi-shrink-xl')
  public shrinkXl: number;

  @Input('bon-fi-basis-xl')
  public basisXl: number | string;

  @Input('bon-fi-align-xl')
  public alignXl: string;

  @HostBinding('style.flexOrder')
  public currentOrder: string;

  @HostBinding('style.flexGrow')
  public currentGrow: string;

  @HostBinding('style.flexShrink')
  public currentShrink: string;

  @HostBinding('style.flexBasis')
  public currentBasis: string;

  @HostBinding('style.alignSelf')
  public currentAlign: string;

  public applyLayout(): void {
    this.currentOrder = this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]);
    this.currentGrow = this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]);
    this.currentShrink = this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]);
    this.currentBasis = this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]);
    this.currentAlign = this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align]);
  }

  public removeLayout(): void {
    this.currentOrder = this.currentGrow = this.currentShrink = this.currentBasis = this.currentAlign = null;
  }
}
