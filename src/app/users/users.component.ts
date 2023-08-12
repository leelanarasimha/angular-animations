import { Component, HostBinding } from '@angular/core';
import {
  routeAnimationState,
  routeSlideAnimationState,
} from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeAnimationState, routeSlideAnimationState],
})
export class UsersComponent {
  @HostBinding('@routeSlideAnimationTrigger') routeAnimation = true;
}
