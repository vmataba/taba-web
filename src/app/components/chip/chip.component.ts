import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  @Input() text = ''
  
}
