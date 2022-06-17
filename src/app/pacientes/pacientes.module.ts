import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PacienteListComponent,
    PacienteDetailComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    SharedModule,
    MaterialModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})

export class PacientesModule { }
