import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MachineModel } from '../models/machine-model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  @Input() model: MachineModel | undefined = undefined;
  @Output() saved = new EventEmitter<MachineModel>();

  getValue(event: any): string {
    return event.target.value;
  }

  save() {
    this.saved.emit(this.model);
  }
}
