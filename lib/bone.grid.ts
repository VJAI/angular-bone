import { Directive, Input } from '@angular/core';
import { BoneBase } from './base';

export interface GridContainerStyleProps {
  display: string;
  gridTemplateColumns: string;
  gridTemplateRows: string;
  gridTemplateAreas: string;
  gridAutoColumns: string;
  gridAutoRows: string;
  gridGap: string;
  justifyItems: string;
  alignItems: string;
  justifyContent: string;
  alignContent: string;
}

@Directive({
  selector: '[bon-g]'
})
export class BoneGrid extends BoneBase {

  private _display = 'grid';

  @Input('bon-g')
  public get display(): string {
    return this._display;
  }

  public set display(display: string) {
    this._display = display || 'grid';
  }

  @Input('bon-g-cols')
  public cols: number | Array<number | string> | string;

  @Input('bon-g-rows')
  public rows: number | Array<number | string> | string;

  @Input('bon-g-area')
  public area: Array<Array<string>> | string;

  @Input('bon-g-auto-cols')
  public autoCols: number | string;

  @Input('bon-g-auto-rows')
  public autoRows: number | string;

  @Input('bon-g-auto-flow')
  public autoFlow: string;

  @Input('bon-g-gap')
  public gridGap: number | Array<number | string> | string;

  @Input('bon-g-justify-items')
  public justifyItems: string;

  @Input('bon-g-align-items')
  public alignItems: string;

  @Input('bon-g-justify-content')
  public justifyContent: string;

  @Input('bon-g-align-content')
  public alignContent: string;

  private _displaySm = 'grid';

  @Input('bon-g-sm')
  public get displaySm(): string {
    return this._displaySm;
  }

  public set displaySm(display: string) {
    this._displaySm = display || 'grid';
  }

  @Input('bon-g-cols-sm')
  public colsSm: number | Array<number | string> | string;

  @Input('bon-g-rows-sm')
  public rowsSm: number | Array<number | string> | string;

  @Input('bon-g-area-sm')
  public areaSm: Array<Array<string>> | string;

  @Input('bon-g-auto-cols-sm')
  public autoColsSm: number | string;

  @Input('bon-g-auto-rows-sm')
  public autoRowsSm: number | string;

  @Input('bon-g-auto-flow-sm')
  public autoFlowSm: string;

  @Input('bon-g-gap-sm')
  public gridGapSm: number | Array<number | string> | string;

  @Input('bon-g-justify-items-sm')
  public justifyItemsSm: string;

  @Input('bon-g-align-items-sm')
  public alignItemsSm: string;

  @Input('bon-g-justify-content-sm')
  public justifyContentSm: string;

  @Input('bon-g-align-content-sm')
  public alignContentSm: string;

  private _displayMd = 'grid';

  @Input('bon-g-md')
  public get displayMd(): string {
    return this._displayMd;
  }

  public set displayMd(display: string) {
    this._displayMd = display || 'grid';
  }

  @Input('bon-g-cols-md')
  public colsMd: number | Array<number | string> | string;

  @Input('bon-g-rows-md')
  public rowsMd: number | Array<number | string> | string;

  @Input('bon-g-area-md')
  public areaMd: Array<Array<string>> | string;

  @Input('bon-g-auto-cols-md')
  public autoColsMd: number | string;

  @Input('bon-g-auto-rows-md')
  public autoRowsMd: number | string;

  @Input('bon-g-auto-flow-md')
  public autoFlowMd: string;

  @Input('bon-g-gap-md')
  public gridGapMd: number | Array<number | string> | string;

  @Input('bon-g-justify-items-md')
  public justifyItemsMd: string;

  @Input('bon-g-align-items-md')
  public alignItemsMd: string;

  @Input('bon-g-justify-content-md')
  public justifyContentMd: string;

  @Input('bon-g-align-content-md')
  public alignContentMd: string;

  private _displayLg = 'grid';

  @Input('bon-g-lg')
  public get displayLg(): string {
    return this._displayLg;
  }

  public set displayLg(display: string) {
    this._displayLg = display || 'grid';
  }

  @Input('bon-g-cols-lg')
  public colsLg: number | Array<number | string> | string;

  @Input('bon-g-rows-lg')
  public rowsLg: number | Array<number | string> | string;

  @Input('bon-g-area-lg')
  public areaLg: Array<Array<string>> | string;

  @Input('bon-g-auto-cols-lg')
  public autoColsLg: number | string;

  @Input('bon-g-auto-rows-lg')
  public autoRowsLg: number | string;

  @Input('bon-g-auto-flow-lg')
  public autoFlowLg: string;

  @Input('bon-g-gap-lg')
  public gridGapLg: number | Array<number | string> | string;

  @Input('bon-g-justify-items-lg')
  public justifyItemsLg: string;

  @Input('bon-g-align-items-lg')
  public alignItemsLg: string;

  @Input('bon-g-justify-content-lg')
  public justifyContentLg: string;

  @Input('bon-g-align-content-lg')
  public alignContentLg: string;

  private _displayXl = 'grid';

  @Input('bon-g-xl')
  public get displayXl(): string {
    return this._displayXl;
  }

  public set displayXl(display: string) {
    this._displayXl = display || 'grid';
  }

  @Input('bon-g-cols-xl')
  public colsXl: number | Array<number | string> | string;

  @Input('bon-g-rows-xl')
  public rowsXl: number | Array<number | string> | string;

  @Input('bon-g-area-xl')
  public areaXl: Array<Array<string>> | string;

  @Input('bon-g-auto-cols-xl')
  public autoColsXl: number | string;

  @Input('bon-g-auto-rows-xl')
  public autoRowsXl: number | string;

  @Input('bon-g-auto-flow-xl')
  public autoFlowXl: string;

  @Input('bon-g-gap-xl')
  public gridGapXl: number | Array<number | string> | string;

  @Input('bon-g-justify-items-xl')
  public justifyItemsXl: string;

  @Input('bon-g-align-items-xl')
  public alignItemsXl: string;

  @Input('bon-g-justify-content-xl')
  public justifyContentXl: string;

  @Input('bon-g-align-content-xl')
  public alignContentXl: string;

  private currentStyles: GridContainerStyleProps = null;

  public getStyles(): { [key: string]: any } {
    const newStyles = {
      display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
      gridTemplateColumns: this.getCols(),
      gridTemplateRows: this.getRows(),
      gridTemplateAreas: this.getAreas(),
      gridAutoColumns: this.getAutoCols(),
      gridAutoRows: this.getAutoRows(),
      gridGap: this.getGap(),
      justifyItems: this.getValue([this.justifyItemsXl, this.justifyItemsLg, this.justifyItemsMd, this.justifyItemsSm, this.justifyItems]),
      alignItems: this.getValue([this.alignItemsXl, this.alignItemsLg, this.alignItemsMd, this.alignItemsSm, this.alignItems]),
      justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg, this.justifyContentMd,
        this.justifyContentSm, this.justifyContent]),
      alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
    };

    if (this.currentStyles === null) {
      const hasValue = Object.values(newStyles).filter(newStyle => !!newStyle).length > 0;
      this.currentStyles = hasValue ? newStyles : null;
      return this.currentStyles;
    } else if (this.currentStyles.display !== newStyles.display ||
      this.currentStyles.gridTemplateColumns !== newStyles.gridTemplateColumns ||
      this.currentStyles.gridTemplateRows !== newStyles.gridTemplateRows ||
      this.currentStyles.gridTemplateAreas !== newStyles.gridTemplateAreas ||
      this.currentStyles.gridAutoColumns !== newStyles.gridAutoColumns ||
      this.currentStyles.gridAutoRows !== newStyles.gridAutoRows ||
      this.currentStyles.gridGap !== newStyles.gridGap ||
      this.currentStyles.justifyItems !== newStyles.justifyItems ||
      this.currentStyles.alignItems !== newStyles.alignItems ||
      this.currentStyles.justifyContent !== newStyles.justifyContent ||
      this.currentStyles.alignContent !== newStyles.alignContent
    ) {
      this.currentStyles = newStyles;
      return this.currentStyles;
    }

    return null;
  }

  public getStylePropNames(): Array<string> {
    return [
      'display',
      'grid-template-columns',
      'grid-template-rows',
      'grid-template-areas',
      'grid-auto-columns',
      'grid-auto-rows',
      'grid-gap',
      'justify-items',
      'align-items',
      'justify-content',
      'align-content'
    ];
  }

  private getCols(): string {
    const cols = this.getValue([this.colsXl, this.colsLg, this.colsMd, this.colsSm, this.cols]);
    return this.getTracks(cols);
  }

  private getRows(): string {
    const rows = this.getValue([this.rowsXl, this.rowsLg, this.rowsMd, this.rowsSm, this.rows]);
    return this.getTracks(rows);
  }

  private getTracks(tracks: number | Array<number | string> | string): string {
    if (this.isNumeric(<number | string>tracks)) {
      return `repeat(${tracks}, 1fr)`;
    } else if (Array.isArray(tracks)) {
      return tracks.map(track => typeof track === 'number' ? `${track}px` : track).join(' ');
    }

    return <string>tracks;
  }

  private getAutoCols(): string {
    const colDefaultSize = this.getValue([this.autoColsXl, this.autoColsLg, this.autoColsMd, this.autoColsSm, this.autoCols]);
    return this.getTrackDefaultSize(colDefaultSize);
  }

  private getAutoRows(): string {
    const rowDefaultSize = this.getValue([this.autoRowsXl, this.autoRowsLg, this.autoRowsMd, this.autoColsSm, this.autoRows]);
    return this.getTrackDefaultSize(rowDefaultSize);
  }

  private getTrackDefaultSize(size: number | string): string {
    return this.isNumeric(size) ? `${size}px` : <string>size;
  }

  private getAreas(): string {
    const area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);

    if (Array.isArray(area)) {
      return area.map(row => row.join(' ')).reduce((areaStr, row, index) => `${index === 0 ? `'${areaStr}'` : areaStr} '${row}'`);
    }

    return <string>area;
  }

  private getGap(): string {
    const gridGap = this.getValue([this.gridGapXl, this.gridGapLg, this.gridGapMd, this.gridGapSm, this.gridGap]);

    if (this.isNumeric(gridGap)) {
      return `${gridGap}px`;
    } else if (Array.isArray(gridGap)) {
      return gridGap.map(g => typeof g === 'number' ? `${g}px` : g).join(' ');
    } else {
      return gridGap;
    }
  }
}
