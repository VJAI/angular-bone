import {
  Component,
  Inject,
  NgModule
} from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import 'zone.js/dist/zone';
import { BoneModule } from 'angular-bone';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.html',
  styleUrls: ['./demo.scss']
})
export class DemoComponent {

  public isSticky: boolean;

  public code1: SafeHtml;

  public code2: SafeHtml;

  constructor(@Inject(DomSanitizer) private sanitized: DomSanitizer) {
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
