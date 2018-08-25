import { Directive, Input } from '@angular/core';
import { BoneBase } from './base';

@Directive({
  selector: '[bon-grid-item]'
})
export class BoneGridItem extends BoneBase {

  @Input('bon-grid-item-col')
  col: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row')
  row: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area')
  area: [number, number, number, number] | string;

  @Input('bon-grid-item-justify')
  justify: string;

  @Input('bon-grid-item-align')
  align: string;

  @Input('bon-grid-item-col-sm')
  colSm: string;

  @Input('bon-grid-item-row-sm')
  rowSm: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-sm')
  areaSm: string;

  @Input('bon-grid-item-justify-sm')
  justifySm: string;

  @Input('bon-grid-item-align-sm')
  alignSm: string;

  @Input('bon-grid-item-col-md')
  colMd: string;

  @Input('bon-grid-item-row-md')
  rowMd: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-md')
  areaMd: string;

  @Input('bon-grid-item-justify-md')
  justifyMd: string;

  @Input('bon-grid-item-align-md')
  alignMd: string;

  @Input('bon-grid-item-col-lg')
  colLg: string;

  @Input('bon-grid-item-row-lg')
  rowLg: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-lg')
  areaLg: string;

  @Input('bon-grid-item-justify-lg')
  justifyLg: string;

  @Input('bon-grid-item-align-lg')
  alignLg: string;

  @Input('bon-grid-item-col-xl')
  colXl: string;

  @Input('bon-grid-item-row-xl')
  rowXl: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-xl')
  areaXl: string;

  @Input('bon-grid-item-justify-xl')
  justifyXl: string;

  @Input('bon-grid-item-align-xl')
  alignXl: string;

  protected applyLayout(): void {
    const gridItemStyle = {
      gridColumn: this.getCol(),
      gridRow: this.getRow(),
      gridTemplateAreas: this.getAreaInfo(),
      justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm])
    };

    Object.assign(this.el.nativeElement.style, gridItemStyle);
  }

  private getCol(): string {
    const col = this.getValue([this.colXl, this.colLg, this.colMd, this.colSm, this.col]);
    return this.getTrackInfo(col);
  }

  private getRow(): string {
    const row = this.getValue([this.rowXl, this.rowLg, this.rowMd, this.rowSm, this.row]);
    return this.getTrackInfo(row);
  }

  private getTrackInfo(track: number | [number | string, number | string] | string): string {
    if (typeof track === 'string') {
      return track;
    } else if (this.isNumeric(<number>track)) {
      return `span ${track}`;
    }

    return `${track[0]} / ${track[1]}`;
  }

  private getAreaInfo(): string {
    return '';
  }
}
