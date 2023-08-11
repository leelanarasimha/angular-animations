import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state(
    'valid',
    style({
      backgroundColor: 'green',
    })
  ),
  state(
    'invalid',
    style({
      backgroundColor: 'red',
    })
  ),

  transition('invalid => valid', [
    group([
      animate(
        300,
        style({
          transform: 'scale(1.1)',
        })
      ),
      animate(
        300,
        style({
          backgroundColor: 'green',
        })
      ),
    ]),

    animate(300, style({ transform: 'scale(1)' })),
  ]),
  transition('valid => invalid', [
    group([
      animate(
        300,
        style({
          transform: 'scale(1.1)',
        })
      ),
      animate(
        300,
        style({
          backgroundColor: 'red',
        })
      ),
    ]),

    animate(300, style({ transform: 'scale(1)' })),
  ]),
]);
