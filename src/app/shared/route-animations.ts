import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const fadeAnimation = animation(
  [
    style({
      opacity: '{{opacity}}',
    }),
    animate('{{duration}}'),
  ],
  { params: { opacity: 0, duration: '500ms' } }
);

export const routeAnimationState = (params: any) =>
  trigger('routeAnimationTrigger', [
    transition(
      ':enter',
      useAnimation(fadeAnimation, {
        params,
      })
    ),
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
