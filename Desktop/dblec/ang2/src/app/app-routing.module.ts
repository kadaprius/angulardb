import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerGuard } from './guards/worker.guard';
import { WorkerDeGuard } from './guards/worker-de.guard';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'worker',component:WorkerComponent,
  canActivate: [WorkerGuard],
  canDeactivate: [WorkerDeGuard],
  canActivateChild:[WorkerGuard],
  children:[
    {path:'details',component:DetailsComponent}
    ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
