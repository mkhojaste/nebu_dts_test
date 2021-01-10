import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentContainerComponent } from './parent-container/parent-container.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {path:'', component:ParentContainerComponent},
  {path: 'testing', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
