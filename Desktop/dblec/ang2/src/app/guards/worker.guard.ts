import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate,CanActivateChild {
  constructor(private router: Router){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const workerChild = true;

    if(workerChild){
      return this.canActivate(childRoute,state);
    }
    else{
      return false;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const worker = true;
      if(worker){
        return true;
      }
      else{
        this.router.navigate(['/home']);
        return false;
      }


  }
  
}
