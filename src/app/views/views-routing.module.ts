import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
const routes: Routes = [
  {
    path:'',redirectTo:'jokes',pathMatch:'full'
  },
  {
    path:'jokes',component:JokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
