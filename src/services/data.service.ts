import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MachineModel } from '../app/models/machine-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  url = 'http://localhost:3000/machines';

  constructor(private http: HttpClient) { }

  getMachines(): Observable<MachineModel[]> {
    return this.http.get<MachineModel[]>(this.url);
  }

  addMachine(reg: MachineModel): Observable<MachineModel> {
    return this.http.post<MachineModel>(this.url, reg);
  }

  modifyMachine(reg: MachineModel): Observable<MachineModel> {
    return this.http.put<MachineModel>(`${this.url}/${reg.id}`, reg);
  }

  deleteMachine(reg: MachineModel): Observable<MachineModel> {
    return this.http.delete<MachineModel>(`${this.url}/${reg.id}`);
  }
}
