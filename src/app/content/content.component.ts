import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-content',
  imports: [InfoComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
