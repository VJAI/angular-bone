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
  selector: '[bon-gi]'
})
export class BoneGridItem extends BoneBase {

  @Input('bon-gi-col')
  public col: number | [number | string, number | string] | string;

  @Input('bon-gi-row')
  public row: number | [number | string, number | string] | string;

  @Input('bon-gi-area')
  public area: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-gi-justify')
  public justify: string;

  @Input('bon-gi-align')
  public align: string;

  @Input('bon-gi-col-sm')
  public colSm: number | [number | string, number | string] | string;

  @Input('bon-gi-row-sm')
  public rowSm: number | [number | string, number | string] | string;

  @Input('bon-gi-area-sm')
  public areaSm: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-gi-justify-sm')
  public justifySm: string;

  @Input('bon-gi-align-sm')
  public alignSm: string;

  @Input('bon-gi-col-md')
  public colMd: string;

  @Input('bon-gi-row-md')
  public rowMd: number | [number | string, number | string] | string;

  @Input('bon-gi-area-md')
  public areaMd: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-gi-justify-md')
  public justifyMd: string;

  @Input('bon-gi-align-md')
  public alignMd: string;

  @Input('bon-gi-col-lg')
  public colLg: string;

  @Input('bon-gi-row-lg')
  public rowLg: number | [number | string, number | string] | string;

  @Input('bon-gi-area-lg')
  public areaLg: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-gi-justify-lg')
  public justifyLg: string;

  @Input('bon-gi-align-lg')
  public alignLg: string;

  @Input('bon-gi-col-xl')
  public colXl: string;

  @Input('bon-gi-row-xl')
  public rowXl: number | [number | string, number | string] | string;

  @Input('bon-gi-area-xl')
  public areaXl: [number | string, number | string, number | string, number | string] | string;

  @Input('bon-gi-justify-xl')
  public justifyXl: string;

  @Input('bon-gi-align-xl')
  public alignXl: string;

  private currentStyles: GridItemStyleProps = null;

  public getStyles(): { [key: string]: any } {
    const newStyles: GridItemStyleProps = {
      justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
      alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align]),
      gridArea: this.getAreaInfo(),
      gridColumn: this.getCol(),
      gridRow: this.getRow()
    };

    if (this.currentStyles === null) {
      const hasValue = Object.values(newStyles).filter(newStyle => !!newStyle).length > 0;
      this.currentStyles = hasValue ? newStyles : null;
      return this.currentStyles;
    } else if (this.currentStyles.justifySelf !== newStyles.justifySelf ||
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
    return Object.keys(this.currentStyles || {});
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

    return <string>track;
  }

  private getAreaInfo(): string {
    const area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);

    if (Array.isArray(area)) {
      return `${area[0] / area[1] / area[2] / area[3]}`;
    }

    return area;
  }
}
