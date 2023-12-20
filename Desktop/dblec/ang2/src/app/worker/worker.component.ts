import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{
  workerForm!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {}
  ngOnInit(): void {
    this.createForm();
  }
 
  createForm(){
    this.workerForm = this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required,Validators.minLength(6)],
      mobile:['',Validators.required,Validators.minLength(6)]
    });
  }
  goToAdmin(){
    this.router.navigate(['/admin']);
  }
  canExit(){
    if(!this.workerForm.valid){
      return window.confirm('You have unsaved changes.Do you really want to leave this page?');
    }else
    {
      return true;
    }
  }
  goToChild(){
    this.router.navigate(['/worker/details']);
  }
}
