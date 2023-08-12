import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        group([
          query(
            '.card-header',
            style({
              opacity: 0,
            })
          ),
          style({
            opacity: 0,
            transform: 'translateX(100%)',
          }),
          animate(3000),
          query('.card-header', [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            animate(3000),
          ]),
          query('.card-footer', [
            style({ opacity: 0, transform: 'translateY(100%)' }),
            animate(3000),
          ]),
        ]),
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
