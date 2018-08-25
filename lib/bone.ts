import { NgModule } from '@angular/core';
import { BoneGrid } from './bone.grid';
import { MediaSizeWatcher } from './watcher';

@NgModule({
  imports: [],
  declarations: [
    BoneGrid
  ],
  providers: [
    MediaSizeWatcher
  ],
  exports: [
    BoneGrid
  ]
})
export class BoneModule {
}
