import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-app-wrapper',
  imports: [ FooterComponent, HeaderComponent, ContentComponent],
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss'
})
export class AppWrapperComponent {

}
