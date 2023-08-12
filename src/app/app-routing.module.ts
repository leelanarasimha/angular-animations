import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { VoidAnimationComponent } from './void-animation/void-animation.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'open', component: OpenCloseComponent },
  { path: 'void', component: VoidAnimationComponent },
  { path: 'card', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
