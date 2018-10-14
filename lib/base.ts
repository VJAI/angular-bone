import { ElementRef, EventEmitter, Inject, OnChanges, OnDestroy, Output } from '@angular/core';
import { Breakpoint } from './breakpoint';
import { MediaSizeWatcher } from './watcher';
import { DomSanitizer } from "@angular/platform-browser";

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

  constructor(@Inject(ElementRef) protected el: ElementRef,
              @Inject(MediaSizeWatcher) protected watcher: MediaSizeWatcher,
              @Inject(DomSanitizer) protected sanitizer: DomSanitizer) {
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
    this.removeLayout();
  }

  public destroy(): void {
    this.ngOnDestroy();
  }

  public getValue(arr: Array<any>): any {
    return arr.splice(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(this.breakpoint)).find(val => val);
  }

  public isNumeric(num: number | string): boolean {
    return !isNaN(num as number);
  }

  public abstract applyLayout(): void;

  public abstract removeLayout(): void;
}
