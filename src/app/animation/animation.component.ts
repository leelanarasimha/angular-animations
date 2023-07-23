import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('clickedState', [
      state(
        'default',
        style({
          width: '50px',
          height: '100px',
          backgroundColor: 'orange',
        })
      ),
      state(
        'clicked',
        style({
          width: '100px',
          height: '50px',
          backgroundColor: 'blue',
        })
      ),
      transition('default => clicked', animate('1s 200ms ease-in')),
    ]),
  ],
})
export class AnimationComponent {
  clickInfo = 'default';

  ngOnInit() {
    setTimeout(() => {
      this.clickInfo = 'clicked';
    }, 3000);
  }
}
