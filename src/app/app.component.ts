import {
  AnimationBuilder,
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(-100%)',
              }),
              animate(300),
            ],
            { optional: true }
          ),
          query(
            ':leave',
            animate(300, style({ opacity: 0, transform: 'translateY(100%)' })),
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private builder: AnimationBuilder) {}
  animate(element: HTMLElement) {
    const animation = this.builder.build([
      style({ backgroundColor: 'blue', width: '100px' }),
      animate(
        2000,
        style({
          backgroundColor: 'red',
          width: '500px',
        })
      ),
      animate(300),
    ]);
    const player = animation.create(element);
    player.play();
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'homePage';
    }
    return routeData;
  }
}
