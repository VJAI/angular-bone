import { NgModule } from '@angular/core';
import { BoneFlex } from './bone.flex';
import { BoneFlexItem } from './bone.flexitem';
import { BoneGrid } from './bone.grid';
import { BoneGridItem } from './bone.griditem';
import { MediaSizeWatcher } from './watcher';

@NgModule({
  imports: [],
  declarations: [
    BoneFlex,
    BoneFlexItem,
    BoneGrid,
    BoneGridItem
  ],
  providers: [
    MediaSizeWatcher
  ],
  exports: [
    BoneFlex,
    BoneFlexItem,
    BoneGrid,
    BoneGridItem
  ]
})
export class BoneModule {
}
