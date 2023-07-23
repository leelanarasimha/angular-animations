import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UsersComponent } from './users/users.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'animation', component: AnimationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
