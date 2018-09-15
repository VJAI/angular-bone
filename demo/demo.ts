import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  NgModule,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'zone.js/dist/zone';
import { BoneModule } from '../lib/bone';
import { MediaSizeWatcher } from '../lib/watcher';
import { Breakpoint } from "../lib/breakpoint";

@Component({
  selector: 'demo-root',
  templateUrl: './demo.html',
  styleUrls: ['./demo.scss']
})
class DemoComponent implements AfterViewInit, OnDestroy {

  public title = 'angular-bone';

  @ViewChild('aside')
  public aside: ElementRef;

  public isSticky: boolean;

  private initialOffset: number;

  private mediaWatcherUnSubscribeFunction: () => void;

  private breakpoint: Breakpoint;

  constructor(@Inject(MediaSizeWatcher) private watcher: MediaSizeWatcher) {
    this.breakpoint = this.watcher.getCurrentMedia();
    this.setAside();

    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {
      this.breakpoint = breakpoint;
      this.setAside();
    });
  }

  @HostListener('window:scroll', [])
  setAside() {
    if (!this.aside) {
      return;
    }

    if (this.breakpoint == Breakpoint.Large || this.breakpoint === Breakpoint.ExtraLarge) {
      this.isSticky = window.pageYOffset >= this.initialOffset;
    } else {
      this.isSticky = false;
    }
  }

  ngAfterViewInit() {
    this.initialOffset = this.aside.nativeElement.offsetTop;
  }

  ngOnDestroy() {
    this.mediaWatcherUnSubscribeFunction && this.mediaWatcherUnSubscribeFunction();
  }
}

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BoneModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
