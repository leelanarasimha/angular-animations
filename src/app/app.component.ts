import { AnimationBuilder, animate, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
}
