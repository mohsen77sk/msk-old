import { NgModule } from '@angular/core';
import { MskFindByKeyPipe } from './find-by-key.pipe';

@NgModule({
  declarations: [MskFindByKeyPipe],
  exports: [MskFindByKeyPipe],
})
export class MskFindByKeyPipeModule {}
