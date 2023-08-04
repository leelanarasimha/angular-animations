import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const ConditionAnimation = trigger('conditionalTrigger', [
  // transition('void => *', [
  //   style({
  //     opacity: 0,
  //   }),
  //   animate(300, style({ opacity: 1 })),
  // ]),

  // transition('* => void', [animate(300, style({ opacity: 0 }))]),

  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300, style({ opacity: 1 })),
  ]),

  transition(':leave', [animate(300, style({ opacity: 0 }))]),
]);

export const shrinkAnimation = trigger('shrinkAnimation', [
  transition('* => *', [
    animate('4000ms cubic-bezier(.2,1.5,.83,.67)', style({ width: 0 })),
    animate('4000ms cubic-bezier(.2,1.5,.83,.67)', style({ width: '*' })),
  ]),
]);

export const listAnimation = trigger('listTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white',
    }),

    group([
      animate(
        1000,
        style({
          opacity: 1,
        })
      ),
      animate(
        '4000ms ease-in',
        keyframes([
          style({
            backgroundColor: 'red',
            offset: 0,
          }),
          style({
            backgroundColor: 'yellow',
            offset: 0.9,
          }),
          style({
            backgroundColor: 'green',
            offset: 1,
          }),
        ])
      ),
    ]),

    animate(1000),
  ]),

  transition(':leave', [animate(300, style({ opacity: 0 }))]),
]);
