import { Component } from '@angular/core';
import {
  ConditionAnimation,
  listAnimation,
  shrinkAnimation,
} from './conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  templateUrl: './void-animation.component.html',
  styleUrls: ['./void-animation.component.css'],
  animations: [ConditionAnimation, shrinkAnimation, listAnimation],
})
export class VoidAnimationComponent {
  showContent = false;
  width = 400;
  animate = false;
  listData: number[] = [];

  toggleContent() {
    this.showContent = !this.showContent;
  }

  onAddElement() {
    this.listData.push(Math.random());
  }
}
