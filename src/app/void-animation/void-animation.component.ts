import { Component } from '@angular/core';
import { ConditionAnimation } from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [ConditionAnimation],
})
export class VoidAnimationComponent {
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
