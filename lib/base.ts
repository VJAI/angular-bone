import { ElementRef, EventEmitter, Inject, OnChanges, OnDestroy, Output } from '@angular/core';
import { Breakpoint } from './breakpoint';
import { MediaSizeWatcher } from './watcher';

/**
 * The arguments that'll be passed to handler that listens for breakpoint changes.
 */
export interface BreakpointChangeHandlerArgs {
  breakpoint: Breakpoint;
  el: ElementRef;
  directive: any;
}

export abstract class BoneBase implements OnChanges, OnDestroy {

  /**
   * Handler that should be invoked when there is a breakpoint change.
   */
  @Output('breakpoint-change')
  public breakpointChange: EventEmitter<BreakpointChangeHandlerArgs>;

  /**
   * The current breakpoint.
   */
  protected breakpoint: Breakpoint;

  /**
   * The media-size-watcher unsubscribe function.
   */
  protected mediaWatcherUnSubscribeFunction: () => void;

  protected currentAppliedStyles: any = null;

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

  /**
   * Re-apply the layout on change of props.
   */
  ngOnChanges() {
    this.applyLayout();
  }

  /**
   * Unsubscribe from watcher and remove the applied styles.
   */
  ngOnDestroy() {
    this.mediaWatcherUnSubscribeFunction();
    this.getStylePropNames().forEach(style => {
      this.el.nativeElement.style.removeProperty(style);
    });
  }

  /**
   * Applies the layout style properties to the attached element.
   */
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
        this.el.nativeElement.style.removeProperty(this.toCamel(style));
      }
    });
  }

  /**
   * Returns the styles that should be applied to the target element.
   */
  public abstract getStyles(): { [key: string]: any };

  /**
   * Returns the style properties affected by the directive in kebab-cased.
   */
  public abstract getStylePropNames(): Array<string>;

  /**
   * Destroys the directive and removes the changes applied by it.
   */
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

  public toCamel(str: string): string {
    return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
  }
}
