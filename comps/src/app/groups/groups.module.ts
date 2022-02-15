import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GroupsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
  ]
})
export class GroupsModule { }
