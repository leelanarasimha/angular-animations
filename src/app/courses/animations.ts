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
