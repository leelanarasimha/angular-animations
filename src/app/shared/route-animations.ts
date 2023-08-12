import { animate, style, transition, trigger } from '@angular/animations';

export const routeAnimationState = trigger('routeAnimationTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(300),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const routeSlideAnimationState = trigger('routeSlideAnimationTrigger', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
      opacity: 0,
    }),
    animate(300),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        transform: 'translateY(-100%)',
        opacity: 0,
      })
    ),
  ]),
]);
