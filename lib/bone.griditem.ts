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
  area: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify')
  justify: string;

  @Input('bon-grid-item-align')
  align: string;

  @Input('bon-grid-item-col-sm')
  colSm: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row-sm')
  rowSm: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-sm')
  areaSm: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-sm')
  justifySm: string;

  @Input('bon-grid-item-align-sm')
  alignSm: string;

  @Input('bon-grid-item-col-md')
  colMd: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row-md')
  rowMd: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-md')
  areaMd: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-md')
  justifyMd: string;

  @Input('bon-grid-item-align-md')
  alignMd: string;

  @Input('bon-grid-item-col-lg')
  colLg: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row-lg')
  rowLg: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-lg')
  areaLg: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-lg')
  justifyLg: string;

  @Input('bon-grid-item-align-lg')
  alignLg: string;

  @Input('bon-grid-item-col-xl')
  colXl: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row-xl')
  rowXl: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-xl')
  areaXl: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-xl')
  justifyXl: string;

  @Input('bon-grid-item-align-xl')
  alignXl: string;

  public applyLayout(): void {
    const gridItemStyle = {
      justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
    };

    const col = this.getCol(),
      row = this.getRow(),
      area = this.getAreaInfo();

    if (area) {
      gridItemStyle['area'] = area;
    } else {
      gridItemStyle['gridColumn'] = col;
      gridItemStyle['gridRow'] = row;
    }

    Object.assign(this.el.nativeElement.style, gridItemStyle);
  }

  public getAssignedStyles(): Array<string> {
    return ['grid-column', 'grid-row', 'grid-area', 'justify-self', 'align-self'];
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
    if (this.isNumeric(<number>track)) {
      return `span ${track}`;
    } else if (Array.isArray(track)) {
      return `${track[0]} / ${track[1]}`;
    }

    return <string>track || '';
  }

  private getAreaInfo(): string {
    const area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);

    if (Array.isArray(area)) {
      return `${area[0] / area[1] / area[2] / area[3]}`;
    }

    return area;
  }
}
