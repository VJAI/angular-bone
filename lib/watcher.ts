import { Inject, Injectable, NgZone } from '@angular/core';
import { Breakpoint } from './breakpoint';

@Injectable({
  providedIn: 'root'
})
export class MediaSizeWatcher {

  private currentMediaSize: Breakpoint;

  private subscribers: Array<(MediaQueryList) => void> = [];

  // https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes
  private mediaSizeQueryMap: Map<Breakpoint, MediaQueryList> = new Map<Breakpoint, MediaQueryList>([
    [Breakpoint.ExtraLarge, window.matchMedia('(min-width: 1200px)')],
    [Breakpoint.Large, window.matchMedia('(min-width: 992px)')],
    [Breakpoint.Medium, window.matchMedia('(min-width: 768px)')],
    [Breakpoint.Small, window.matchMedia('(min-width: 576px)')],
    [Breakpoint.ExtraSmall, window.matchMedia('(min-width: 0)')]
  ]);

  constructor(@Inject(NgZone) private ngZone: NgZone) {
    this.listen = this.listen.bind(this);
    this.mediaSizeQueryMap.forEach((value:MediaQueryList) => value.addListener(this.listen));
    this.listen();
  }

  public getCurrentMedia(): Breakpoint {
    return this.currentMediaSize;
  }

  public watch(subscriber: (MediaQueryList) => void): () => void {
    this.subscribers.push(subscriber);
    return () => this.subscribers.splice(this.subscribers.length - 1, 1);
  }

  private listen(): void {
    for(let mediaSizeQuery of this.mediaSizeQueryMap) {
      const [mediaSize, query] = mediaSizeQuery;

      if (query.matches) {
        if (mediaSize !== this.currentMediaSize) {
          this.currentMediaSize = mediaSize;
          this.alertSubscribers();
        }

        break;
      }
    }
  }

  private alertSubscribers(): void {
    this.ngZone.run(() => {
      this.subscribers.forEach(subscriber => subscriber(this.currentMediaSize));
    });
  }
}
