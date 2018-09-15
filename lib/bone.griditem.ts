import { Directive, Input } from '@angular/core';
import { BoneBase } from './base';

export interface GridItemStyleProps {
  justifySelf: string;
  alignSelf: string;
  gridArea?: string;
  gridColumn?: string;
  gridRow?: string;
}

@Directive({
  selector: '[bon-grid-item]'
})
export class BoneGridItem extends BoneBase {

  @Input('bon-grid-item-col')
  public col: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row')
  public row: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area')
  public area: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify')
  public justify: string;

  @Input('bon-grid-item-align')
  public align: string;

  @Input('bon-grid-item-col-sm')
  public colSm: number | [number | string, number | string] | string;

  @Input('bon-grid-item-row-sm')
  public rowSm: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-sm')
  public areaSm: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-sm')
  public justifySm: string;

  @Input('bon-grid-item-align-sm')
  public alignSm: string;

  @Input('bon-grid-item-col-md')
  public colMd: string;

  @Input('bon-grid-item-row-md')
  public rowMd: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-md')
  public areaMd: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-md')
  public justifyMd: string;

  @Input('bon-grid-item-align-md')
  public alignMd: string;

  @Input('bon-grid-item-col-lg')
  public colLg: string;

  @Input('bon-grid-item-row-lg')
  public rowLg: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-lg')
  public areaLg: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-lg')
  public justifyLg: string;

  @Input('bon-grid-item-align-lg')
  public alignLg: string;

  @Input('bon-grid-item-col-xl')
  public colXl: string;

  @Input('bon-grid-item-row-xl')
  public rowXl: number | [number | string, number | string] | string;

  @Input('bon-grid-item-area-xl')
  public areaXl: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-grid-item-justify-xl')
  public justifyXl: string;

  @Input('bon-grid-item-align-xl')
  public alignXl: string;

  private currentStyles: GridItemStyleProps = null;

  public getStyles(): { [key: string]: any } {
    const newStyles: GridItemStyleProps = {
      justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
    };

    const col = this.getCol(),
      row = this.getRow(),
      area = this.getAreaInfo();

    if (area) {
      newStyles.gridArea = area;
    } else {
      newStyles.gridColumn = col;
      newStyles.gridRow = row;
    }

    if (this.currentStyles === null ||
      this.currentStyles.justifySelf !== newStyles.justifySelf ||
      this.currentStyles.alignSelf !== newStyles.alignSelf ||
      this.currentStyles.gridArea !== newStyles.gridArea ||
      this.currentStyles.gridColumn !== newStyles.gridColumn ||
      this.currentStyles.gridRow !== newStyles.gridRow) {
      this.currentStyles = newStyles;
      return this.currentStyles;
    }

    return null;
  }

  public getStylePropNames(): Array<string> {
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
