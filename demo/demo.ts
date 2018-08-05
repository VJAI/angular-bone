import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'zone.js/dist/zone';

@Component({
  selector: 'demo-root',
  templateUrl: './demo.html',
  styleUrls: ['./demo.scss']
})
class DemoComponent {
  title = 'angular-bone';
}

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
