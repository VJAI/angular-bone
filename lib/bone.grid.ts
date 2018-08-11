import {Directive, ElementRef, Inject, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[bon-grid]'
})
export class BoneGrid implements OnChanges {

  private _display: string = 'grid';

  @Input('bon-grid')
  public get display(): string {
    return this._display;
  }

  public set display(display: string) {
    this._display = display || 'grid';
  }

  @Input('bon-grid-cols')
  public cols: number | Array<number | string> | string;

  @Input('bon-grid-rows')
  public rows: number | Array<number | string> | string;

  @Input('bon-grid-area')
  public area: Array<Array<string>> | string;

  @Input('bon-grid-auto-rows')
  public autoRows: number | string;

  @Input('bon-grid-auto-cols')
  public autoCols: number | string;

  @Input('bon-grid-auto-flow')
  public autoFlow: string;

  @Input('bon-grid-auto-gap')
  public gridGap: number | Array<number | string> | string;

  @Input('bon-grid-justify-items')
  public justifyItems: string;

  @Input('bon-grid-align-items')
  public alignItems: string;

  @Input('bon-grid-justify-content')
  public justifyContent: string;

  @Input('bon-grid-align-content')
  public alignContent: string;

  constructor(@Inject(ElementRef) private el: ElementRef) {}

  ngOnChanges() {
    this.apply();
  }

  private apply(): void {
    const nativeEl = this.el.nativeElement;

    const gridStyle = {
      display: this._display,
      gridTemplateColumns: this.getCols(),
      gridTemplateRows: this.getRows(),
      gridTemplateAreas: this.getAreas(),
      gridAutoColumns: this.getAutoCols(),
      gridAutoRows: this.getAutoRows(),
      gridGap: this.getGap(),
      justifyItems: this.justifyItems,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent,
      alignContent: this.alignContent
    };

    nativeEl.style = {...nativeEl.style, ...gridStyle};
  }

  private getCols(): string {
    return this.getTracks(this.cols);
  }

  private getRows(): string {
    return this.getTracks(this.rows);
  }

  private getTracks(tracks: number | Array<number | string> | string): string {
    if (typeof tracks === 'number') {
      return `repeat(${this.cols}, 1fr)`;
    } else if (Array.isArray(tracks)) {
      return tracks.map(track => typeof track === 'number' ? `${track}px` : track).join(' ');
    } else {
      return tracks;
    }
  }

  private getAutoCols(): string {
    return this.getTrackDefaultSize(this.autoCols);
  }

  private getAutoRows(): string {
    return this.getTrackDefaultSize(this.autoRows);
  }

  private getTrackDefaultSize(size: number | string): string {
    return typeof size === 'number' ? `${size}px` : size;
  }

  private getAreas(): string {
    if (Array.isArray(this.area)) {
      return this.area.map(row => row.join(' ')).reduce((areaStr, row, index) => `${index === 0 ? `"${areaStr}"` : areaStr} "${row}"`);
    }

    return <string>this.area;
  }

  private getGap(): string {
    if (typeof this.gridGap === 'number') {
      return `${this.gridGap}px`;
    } else if (Array.isArray(this.gridGap)) {
      return this.gridGap.map(g => typeof g === 'number' ? `${g}px` : g).join(' ');
    } else {
      return this.gridGap;
    }
  }
}
