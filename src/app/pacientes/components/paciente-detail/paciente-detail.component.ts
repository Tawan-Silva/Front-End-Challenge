import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { detalhesPacienteModel } from 'src/app/core/models/detalhesPaciente';

@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.scss']
})
export class PacienteDetailComponent implements OnInit {

  pacientes: detalhesPacienteModel[] = [];
  paciente!: detalhesPacienteModel;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<PacienteDetailComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: detalhesPacienteModel) {
    console.log(data);
    this.paciente = data
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event: 'Cancel'});
  }

  protected initBaseComponent(paginator: MatPaginator, sort: MatSort): void
  {
     this.paginator = paginator;
     this.sort = sort;
  }

  ngOnInit() {
    this.initBaseComponent(this.paginator, this.sort);
  }

}
