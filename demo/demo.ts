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
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

  public code1: SafeHtml;

  public code2: SafeHtml;

  private initialOffset: number;

  private mediaWatcherUnSubscribeFunction: () => void;

  private breakpoint: Breakpoint;

  constructor(@Inject(MediaSizeWatcher) private watcher: MediaSizeWatcher, @Inject(DomSanitizer) private sanitized: DomSanitizer) {
    this.breakpoint = this.watcher.getCurrentMedia();
    this.setAside();

    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {
      this.breakpoint = breakpoint;
      this.setAside();
    });

    this.code1 = this.sanitized.bypassSecurityTrustHtml(
      `&lt;div <strong>bon-g
     bon-g-cols="30% 1fr"
     bon-g-rows="20% 1fr 10%"
     bon-g-area="'a a' 'b c' 'd d'"</strong>
     breakpoint-change="onBreakpointChange($event)"&gt;
     ...
&lt;/div&gt;`);

    this.code2 = this.sanitized.bypassSecurityTrustHtml(
      `@Component({...})
public class TestComponent implements OnDestroy {

  private mediaWatcherUnSubscribeFunction: () => void;

  constructor(@Inject(MediaSizeWatcher) private mediaSizeWatcher: MediaSizeWatcher) {
    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {
      if (breakpoint == Breakpoint.ExtraLarge) {
        // may be add some css class or change the style of the component?
      }
    });
  }

  ngOnDestroy() {
    this.mediaWatcherUnSubscribeFunction();
  }
}`);
  }

  @HostListener('window:scroll', [])
  setAside() {
    if (!this.aside) {
      return;
    }

    if ([Breakpoint.Medium, Breakpoint.Large, Breakpoint.ExtraLarge].indexOf(this.breakpoint) > -1) {
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
