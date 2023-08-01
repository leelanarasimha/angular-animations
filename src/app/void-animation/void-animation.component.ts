import { Component } from '@angular/core';
import { ConditionAnimation, shrinkAnimation } from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [ConditionAnimation, shrinkAnimation],
})
export class VoidAnimationComponent {
  showContent = false;
  width = 400;
  animate = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
