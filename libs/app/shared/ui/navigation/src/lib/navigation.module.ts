import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MskScrollbarModule } from '@msk/app/shared/directives/scrollbar';

import { MskHorizontalNavigationComponent } from './horizontal/horizontal.component';
import { MskHorizontalNavigationBasicItemComponent } from './horizontal/components/basic/basic.component';
import { MskHorizontalNavigationBranchItemComponent } from './horizontal/components/branch/branch.component';
import { MskHorizontalNavigationDividerItemComponent } from './horizontal/components/divider/divider.component';
import { MskHorizontalNavigationSpacerItemComponent } from './horizontal/components/spacer/spacer.component';
import { MskVerticalNavigationComponent } from './vertical/vertical.component';
import { MskVerticalNavigationAsideItemComponent } from './vertical/components/aside/aside.component';
import { MskVerticalNavigationBasicItemComponent } from './vertical/components/basic/basic.component';
import { MskVerticalNavigationCollapsableItemComponent } from './vertical/components/collapsable/collapsable.component';
import { MskVerticalNavigationDividerItemComponent } from './vertical/components/divider/divider.component';
import { MskVerticalNavigationGroupItemComponent } from './vertical/components/group/group.component';
import { MskVerticalNavigationSpacerItemComponent } from './vertical/components/spacer/spacer.component';

@NgModule({
  declarations: [
    MskHorizontalNavigationComponent,
    MskHorizontalNavigationBasicItemComponent,
    MskHorizontalNavigationBranchItemComponent,
    MskHorizontalNavigationDividerItemComponent,
    MskHorizontalNavigationSpacerItemComponent,
    MskVerticalNavigationComponent,
    MskVerticalNavigationAsideItemComponent,
    MskVerticalNavigationBasicItemComponent,
    MskVerticalNavigationCollapsableItemComponent,
    MskVerticalNavigationDividerItemComponent,
    MskVerticalNavigationGroupItemComponent,
    MskVerticalNavigationSpacerItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MskScrollbarModule,
  ],
  exports: [MskHorizontalNavigationComponent, MskVerticalNavigationComponent],
})
export class MskNavigationModule {}
