import { Directive, HostBinding, Input } from '@angular/core';
import { BoneBase } from './base';

@Directive({
  selector: '[bon-f]'
})
export class BoneFlex extends BoneBase {

  private _display = 'flex';

  @Input('bon-f')
  public get display(): string {
    return this._display;
  }

  public set display(display: string) {
    this._display = display || 'flex';
  }

  @Input('bon-f-direction')
  public direction: string;

  @Input('bon-f-wrap')
  public wrap: string;

  @Input('bon-f-justify-content')
  public justifyContent: string;

  @Input('bon-f-align-items')
  public alignItems: string;

  @Input('bon-f-align-content')
  public alignContent: string;

  private _displaySm = 'flex';

  @Input('bon-f-sm')
  public get displaySm(): string {
    return this._displaySm;
  }

  public set displaySm(display: string) {
    this._displaySm = display || 'flex';
  }

  @Input('bon-f-direction-sm')
  public directionSm: string;

  @Input('bon-f-wrap-sm')
  public wrapSm: string;

  @Input('bon-f-justify-content-sm')
  public justifyContentSm: string;

  @Input('bon-f-align-items-sm')
  public alignItemsSm: string;

  @Input('bon-f-align-content-sm')
  public alignContentSm: string;

  private _displayMd = 'flex';

  @Input('bon-f-md')
  public get displayMd(): string {
    return this._displayMd;
  }

  public set displayMd(display: string) {
    this._displayMd = display || 'flex';
  }

  @Input('bon-f-direction-md')
  public directionMd: string;

  @Input('bon-f-wrap-md')
  public wrapMd: string;

  @Input('bon-f-justify-content-md')
  public justifyContentMd: string;

  @Input('bon-f-align-items-md')
  public alignItemsMd: string;

  @Input('bon-f-align-content-md')
  public alignContentMd: string;

  private _displayLg = 'flex';

  @Input('bon-f-lg')
  public get displayLg(): string {
    return this._displayLg;
  }

  public set displayLg(display: string) {
    this._displayLg = display || 'flex';
  }

  @Input('bon-f-direction-lg')
  public directionLg: string;

  @Input('bon-f-wrap-lg')
  public wrapLg: string;

  @Input('bon-f-justify-content-lg')
  public justifyContentLg: string;

  @Input('bon-f-align-items-lg')
  public alignItemsLg: string;

  @Input('bon-f-align-content-lg')
  public alignContentLg: string;

  private _displayXl = 'flex';

  @Input('bon-f-xl')
  public get displayXl(): string {
    return this._displayXl;
  }

  public set displayXl(display: string) {
    this._displayXl = display || 'flex';
  }

  @Input('bon-f-direction-xl')
  public directionXl: string;

  @Input('bon-f-wrap-xl')
  public wrapXl: string;

  @Input('bon-f-justify-content-xl')
  public justifyContentXl: string;

  @Input('bon-f-align-items-xl')
  public alignItemsXl: string;

  @Input('bon-f-align-content-xl')
  public alignContentXl: string;

  @HostBinding('style.display')
  public currentDisplay: string;

  @HostBinding('style.flexDirection')
  public currentDirection: string;

  @HostBinding('style.flexWrap')
  public currentWrap: string;

  @HostBinding('style.justifyContent')
  public currentJustifyContent: string;

  @HostBinding('style.alignItems')
  public currentAlignItems: string;

  @HostBinding('style.alignContent')
  public currentAlignContent: string;

  public applyLayout(): void {
    const display = this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]);

    if (display !== 'flex' && display !== 'inline-flex') {
      this.removeLayout();
      return;
    }

    this.currentDisplay = display;
    this.currentDirection = this.getValue([this.directionXl, this.directionLg, this.directionMd, this.directionSm, this.direction]);
    this.currentWrap = this.getValue([this.wrapXl, this.wrapLg, this.wrapMd, this.wrapSm, this.wrap]);
    this.currentJustifyContent = this.getValue([this.justifyContentXl, this.justifyContentLg, this.justifyContentMd, this.justifyContentSm, this.justifyContent]);
    this.currentAlignItems = this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignItems]);
    this.currentAlignContent = this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent]);
  }

  public removeLayout(): void {
    this.currentDisplay = this.currentDirection = this.currentWrap = this.currentJustifyContent = this.currentAlignItems = this.currentAlignContent = null;
  }
}
