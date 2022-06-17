import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteDetailComponent } from './components/paciente-detail/paciente-detail.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';

const routes: Routes = [
  {
    path: 'pacientes',
   component: PacienteListComponent

  },
  {
    path:'paciente/:id',
    component: PacienteDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
