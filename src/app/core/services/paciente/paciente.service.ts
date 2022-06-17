import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { infoGeralModel } from '../../models/infoGeralModel';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(
    private http: HttpClient
  ) { }


  getTodosPacientes(): Observable<infoGeralModel> {
    return from(this.http.get<infoGeralModel>('https://randomuser.me/api/?results=100'))
  }
}
