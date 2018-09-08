import { ElementRef, Inject, OnChanges, OnDestroy } from '@angular/core';
import { Breakpoint } from './breakpoint';
import { MediaSizeWatcher } from './watcher';

export abstract class BoneBase implements OnChanges, OnDestroy {

  protected breakpoint: Breakpoint;

  protected mediaWatcherUnSubscribeFunction: () => void;

  constructor(@Inject(ElementRef) protected el: ElementRef, @Inject(MediaSizeWatcher) protected watcher: MediaSizeWatcher) {
    this.breakpoint = this.watcher.getCurrentMedia();
    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {
      this.breakpoint = breakpoint;
      this.applyLayout();
    });
  }

  ngOnChanges() {
    this.applyLayout();
  }

  ngOnDestroy() {
    this.mediaWatcherUnSubscribeFunction();
    this.getAssignedStyles().forEach(style => {
      this.el.nativeElement.style.removeProperty(style);
    });
  }

  public abstract applyLayout(): void;

  public abstract getAssignedStyles(): Array<string>;

  public destroy(): void {
    this.ngOnDestroy();
  }

  public getValue(arr: Array<any>): any {
    return arr.reverse().splice(['xl', 'lg', 'md', 'sm'].indexOf(this.breakpoint)).find(val => val);
  }

  public isNumeric(num: number | string): boolean {
    return !isNaN(num as number);
  }
}
