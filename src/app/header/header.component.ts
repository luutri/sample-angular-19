import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatMenuModule, NgbCarouselModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('lineAnimation', [
      state('inactive', style({
        transform: 'translateY(0px) rotate(0deg)' ,
      })),
      state('active', style({
        transform: 'translateY(4px) rotate(45deg) '
      })),
      transition('inactive => active', animate('200ms')),
      transition('active => inactive', animate('200ms'))
    ]),
    trigger('lineAnimation2', [
      state('inactive', style({
        transform: 'rotate(0deg)'
      })),
      state('active', style({
        transform: 'rotate(-45deg)'
      })),
      transition('inactive => active', animate('200ms')),
      transition('active => inactive', animate('200ms'))
    ])
  ],
  providers: [NgbCarouselConfig],
})

export class HeaderComponent {
  isActive = false;
  images = ['banner'].map((n) => `assets/images/${n}.jpg`);

  toggleMenu() {
    this.isActive = !this.isActive;
    console.log(this.isActive)
  }
}
