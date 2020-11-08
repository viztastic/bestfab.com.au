import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzCarouselModule,
    NzCardModule,
    NzDividerModule,
    NzStatisticModule,
    NzGridModule,
    NzAffixModule,
    NzListModule
  ],
  exports: [
    NzMenuModule,
    NzLayoutModule,
    NzCarouselModule,
    NzCardModule,
    NzDividerModule,
    NzStatisticModule,
    NzGridModule,
    NzAffixModule,
    NzListModule
  ]
})
export class SharedModule { }
