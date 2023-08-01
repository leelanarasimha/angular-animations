import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const ConditionAnimation = trigger('conditionalTrigger', [
  state('shown', style({})),

  transition('void => shown', [
    style({
      opacity: 0,
    }),
    animate(300, style({ opacity: 1 })),
  ]),

  transition('shown => void', [animate(300, style({ opacity: 0 }))]),
]);
