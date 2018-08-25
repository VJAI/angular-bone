import { Breakpoint } from "./breakpoint";
import { ElementRef, Inject } from "@angular/core";
import { MediaSizeWatcher } from "./watcher";

export abstract class BoneBase {

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
  }

  protected abstract applyLayout(): void;

  protected getValue(arr: Array<any>): any {
    return arr.reverse().splice(['xl', 'lg', 'md', 'sm'].indexOf(this.breakpoint)).find(val => val);
  }

  protected isNumeric(num: number | string): boolean {
    return !isNaN(num as number);
  }
}
