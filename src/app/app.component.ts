import { Attribute, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MachineModel } from './models/machine-model';
import { DataService } from '../services/data.service';
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  machines: MachineModel[] = [];
  modify: MachineModel | undefined = undefined;
  new: MachineModel | undefined = undefined;
  attr = {
    health: 0,
    armor: '',
    weaknesses: [''],
    abilities: [''],
    weapons: ['']
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMachines().subscribe({
      next: (data: MachineModel[]) => {
        this.machines = data;
      },
      error: (err) => console.error(err),
    });
  }

  newMach() {
    this.new = {
      id: undefined,
      name: '',
      type: '',
      description: '',
      attributes: this.attr,
      location: ''
    }
  }

  saveNew(reg: MachineModel) {
    this.dataService.addMachine(reg).subscribe({
      next: (data: MachineModel) => {
        this.machines.push(data);
        this.new = undefined;
      },
      error: (err) => console.error(err),
    });
  }

  modifyMach(reg: MachineModel) {
    this.modify = JSON.parse(JSON.stringify(reg));
  }

  saveModify(reg: MachineModel) {
    this.dataService.modifyMachine(reg).subscribe({
      next: (data: MachineModel) => {
        const index = this.machines.findIndex(x => x.id == data.id);
        this.machines[index] = data;
        this.modify = undefined;
      },
      error: (err) => console.error(err),
    });
  }

  deleteMach(reg: MachineModel) {
    this.dataService.deleteMachine  (reg).subscribe({
      next: (data: MachineModel) => {
        const index = this.machines.findIndex(x => x.id == data.id);
        this.machines.splice(index, 1);
      },
      error: (err) => console.error(err),
    });
  }
}
