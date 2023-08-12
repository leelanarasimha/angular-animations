import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate(300),
      ]),
      transition(':leave', [
        animate(
          300,
          style({
            opacity: 0,
            transform: 'translateX(-100%)',
          })
        ),
      ]),
    ]),
  ],
})
export class CardComponent {
  showCard = true;
}