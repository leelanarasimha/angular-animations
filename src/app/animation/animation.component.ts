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
        'mousedown',
        style({
          backgroundColor: 'red',
          border: '1px solid black',
          width: '100px',
          height: '100px',
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
      transition('clicked => default', animate(300)),
      transition('mousedown <=> clicked', animate(300)),
      transition('default <=> mousedown', animate(300)),
    ]),
  ],
})
export class AnimationComponent {
  clickInfo = 'default';
  paragraphState = 'default';

  ngOnInit() {}

  onClickSample() {
    this.clickInfo = 'default';
    setTimeout(() => {
      this.clickInfo = 'clicked';
    }, 3000);
  }

  onParagraphClick() {
    this.paragraphState = 'default';
    setTimeout(() => {
      this.paragraphState = 'mousedown';
    }, 3000);
  }
}
