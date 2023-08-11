import { Component, HostBinding } from '@angular/core';
import { routeAnimationState } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeAnimationState],
})
export class UsersComponent {
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;
}
