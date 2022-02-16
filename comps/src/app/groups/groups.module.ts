import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsHomeComponent } from './groups-home/groups-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { PartnersComponent } from './partners/partners.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    GroupsHomeComponent,
    TableComponent,
    PartnersComponent,
    BiographyComponent,
    CompaniesComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,
  ]
})
export class GroupsModule { }
