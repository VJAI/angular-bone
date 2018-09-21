import { Directive, Input } from '@angular/core';
import { BoneBase } from './base';

export interface FlexItemStyleProps {
  flexOrder: string;
  flexGrow: string;
  flexShrink: string;
  flexBasis: string;
  alignSelf: string;
}

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

  private currentStyles: FlexItemStyleProps = null;

  public getStyles(): { [key: string]: any } {
    const newStyles = {
      flexOrder: this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]),
      flexGrow: this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]),
      flexShrink: this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]),
      flexBasis: this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
    };

    if (this.currentStyles === null) {
      const hasValue = Object.values(newStyles).filter(newStyle => !!newStyle).length > 0;
      this.currentStyles = hasValue ? newStyles : null;
      return this.currentStyles;
    } else if (this.currentStyles.flexOrder !== newStyles.flexOrder ||
      this.currentStyles.flexShrink !== newStyles.flexShrink ||
      this.currentStyles.flexBasis !== newStyles.flexBasis ||
      this.currentStyles.alignSelf !== newStyles.alignSelf) {
      this.currentStyles = newStyles;
      return this.currentStyles;
    }

    return null;
  }

  public getStylePropNames(): Array<string> {
    return ['order', 'grow', 'shrink', 'basis', 'align'];
  }
}
