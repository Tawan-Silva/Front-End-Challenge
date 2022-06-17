import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    PacienteListComponent,
    PacienteDetailComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PacientesModule { }
