import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'zone.js/dist/zone';
import { BoneModule } from '../lib/bone';

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
    BrowserModule,
    BoneModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
