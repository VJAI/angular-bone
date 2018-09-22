import { ElementRef, EventEmitter, Inject, OnChanges, OnDestroy, Output } from '@angular/core';
import { Breakpoint } from './breakpoint';
import { MediaSizeWatcher } from './watcher';

export interface BreakpointChangeHandlerArgs {
  breakpoint: Breakpoint;
  el: ElementRef;
  directive: any;
}

export abstract class BoneBase implements OnChanges, OnDestroy {

  @Output('breakpoint-change')
  public breakpointChange: EventEmitter<BreakpointChangeHandlerArgs> = new EventEmitter<BreakpointChangeHandlerArgs>();

  protected breakpoint: Breakpoint;

  protected mediaWatcherUnSubscribeFunction: () => void;

  constructor(@Inject(ElementRef) protected el: ElementRef, @Inject(MediaSizeWatcher) protected watcher: MediaSizeWatcher) {
    this.breakpoint = this.watcher.getCurrentMedia();
    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {
      this.breakpoint = breakpoint;
      this.applyLayout();
      this.breakpointChange && this.breakpointChange.emit({
        breakpoint: this.breakpoint,
        el: this.el,
        directive: this
      });
    });
  }

  public ngOnChanges() {
    this.applyLayout();
  }

  public ngOnDestroy() {
    this.mediaWatcherUnSubscribeFunction();
    this.getStylePropNames().forEach(style => {
      this.el.nativeElement.style.removeProperty(this.toKebab(style));
    });
  }

  public applyLayout(): void {
    const styles = this.getStyles();

    if (!styles) {
      return;
    }

    Object.keys(styles).forEach(style => {
      const value = styles[style];

      if (value) {
        this.el.nativeElement.style.setProperty(this.toKebab(style), value);
      } else {
        this.el.nativeElement.style.removeProperty(this.toKebab(style));
      }
    });
  }

  public abstract getStyles(): { [key: string]: any };

  public abstract getStylePropNames(): Array<string>;

  public destroy(): void {
    this.ngOnDestroy();
  }

  public getValue(arr: Array<any>): any {
    return arr.splice(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(this.breakpoint)).find(val => val);
  }

  public isNumeric(num: number | string): boolean {
    return !isNaN(num as number);
  }

  public toKebab(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}
