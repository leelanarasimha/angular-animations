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
          animate(300),
          query('.card-header', [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            animate(300),
          ]),
          query('.card-footer', [
            style({ opacity: 0, transform: 'translateY(100%)' }),
            animate(300),
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
      transition('* => *', [
        query(
          '.card-body',
          [
            style({
              transform: 'scale(1)',
            }),
            animate(
              300,
              style({
                transform: 'scale(1.1)',
              })
            ),
            animate(300),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class CardComponent {
  showCard = true;
  showParagraph = true;
}
