import { NgModule } from '@angular/core';
import { MskFindByKeyPipe } from '@msk/client/shared/pipes/find-by-key';

@NgModule({
  declarations: [MskFindByKeyPipe],
  exports: [MskFindByKeyPipe],
})
export class MskFindByKeyPipeModule {}
