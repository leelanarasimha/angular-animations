import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'open', component: OpenCloseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
