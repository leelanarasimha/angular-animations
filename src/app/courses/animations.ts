import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const triggerState = trigger('selectedTrigger', [
  state(
    'default',
    style({
      border: '1px solid black',
      padding: '20px',
      backgroundColor: 'transparent',
    })
  ),
  state(
    'selected',
    style({
      border: '2px solid blue',
      backgroundColor: 'lightblue',
    })
  ),
  transition('default => selected', [
    style({
      padding: '19px',
      border: '2px solid black',
      transform: 'scale(1.02)',
    }),
    animate('300ms ease-out'),
  ]),
  transition('selected => default', [
    style({
      padding: '20px',
      border: '1px solid black',
    }),
    animate('300ms ease-out'),
  ]),
]);

export const courseAddState = trigger('courseAddTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
  ]),

  transition(':leave', [
    animate(
      '500ms ease-in',
      style({
        opacity: 0,
        transform: 'translateX(100%)',
      })
    ),
  ]),
]);
