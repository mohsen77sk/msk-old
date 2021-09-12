import { NgModule } from '@angular/core';
import { MskFindByKeyPipe } from '@msk/app/shared/pipes/find-by-key';

@NgModule({
  declarations: [MskFindByKeyPipe],
  exports: [MskFindByKeyPipe],
})
export class MskFindByKeyPipeModule {}
