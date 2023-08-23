import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
   title = 'onboarding-frontend';
  showFiller = false;

  constructor(
    private router: Router
  ){}
 
  project(){
    this.router.navigate(['project'])
  }
  customer(){
    this.router.navigate(['list'])
  }
  team(){
    this.router.navigate(['team'])
  }
}
