import { Component, HostBinding } from '@angular/core';
import {
  routeAnimationState,
  routeSlideAnimationState,
} from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeAnimationState({ opacity: 0, duration: '5000ms' }),
    routeSlideAnimationState,
  ],
})
export class UsersComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
