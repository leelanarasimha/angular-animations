import {
  animate,
  keyframes,
  query,
  stagger,
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
  transition(
    ':leave',
    animate(
      '500ms ease-in',
      keyframes([
        style({
          transform: 'translateX(0%)',
          offset: 0,
        }),
        style({
          transform: 'translateX(-15%)',
          offset: 0.4,
        }),
        style({
          opacity: 0,
          transform: 'translateX(100%)',
          offset: 1,
        }),
      ])
    )
  ),

  transition('slideUp => slideDown', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateY(0%)',
      })
    ),
  ]),

  transition('slideDown => slideUp', [
    style({
      transform: 'translateY(0%)',
    }),
    animate('500ms', style({ transform: 'translateY(-100%)' })),
  ]),
]);

export const newCourseState = trigger('newCourseTrigger', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate(
      '500ms ease-out',
      style({
        transform: 'translateY(0%)',
      })
    ),
  ]),

  transition(':leave', [
    style({
      transform: 'translateY(0%)',
    }),
    animate('500ms ease-out', style({ transform: 'translateY(-100%)' })),
  ]),
]);

export const listStateTrigger = trigger('listStateTrigger', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        stagger(500, [
          animate(
            '500ms ease-out',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(15%)',
                offset: 0.4,
              }),
              style({
                transform: 'translateX(0%)',
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
