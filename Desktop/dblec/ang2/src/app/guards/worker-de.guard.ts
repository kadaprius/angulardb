import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WorkerComponent } from '../worker/worker.component';

@Injectable({
  providedIn: 'root'
})
export class WorkerDeGuard implements CanDeactivate<WorkerComponent> {
  canDeactivate(
    component:WorkerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): 
    boolean {
    return component.canExit();
  }
  
}
