import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { infoGeralModel } from 'src/app/core/models/infoGeralModel';
import { resultadoModel } from 'src/app/core/models/resultadoModel';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';
import { PacienteDetailComponent } from '../paciente-detail/paciente-detail.component';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent implements OnInit, AfterViewInit {

  paciente: resultadoModel[] = [];

  displayedColumns: string[] = ['picture','name', 'gender', 'birth', 'nat', 'actions'];
  dataSource = new MatTableDataSource<resultadoModel>(this.paciente);
  selection = new SelectionModel<resultadoModel>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  constructor(
    private pacienteService: PacienteService,
    private dialog: MatDialog
    ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource!.paginator = this.paginator;
    this.dataSource! = new MatTableDataSource<resultadoModel>(this.paciente);
  }

  ngOnChanges(){
    this.dataSource = new MatTableDataSource<resultadoModel>(this.paciente);
    this.dataSource.paginator = this.paginator;
  }

  getPacientes() {
    this.pacienteService.getTodosPacientes().subscribe((res: infoGeralModel) => {
      this.paciente = res.results;
      this.dataSource = new MatTableDataSource<resultadoModel>(this.paciente);

      setTimeout(()=>{
        this.dataSource.paginator = this.paginator;
       })
    })
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getPacientes();
  }

  redirectToDetails(action: any, obj: { action: any; }) {
    obj.action = action;

    const dialogRef = this.dialog.open(PacienteDetailComponent, {
      width: '500px',
      data: obj,
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
    });

  }

}

