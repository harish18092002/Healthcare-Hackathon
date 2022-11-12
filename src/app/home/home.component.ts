import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showelements : boolean = false;
gotodoctor(){
this.router.navigate(['./doctor']);
}
gotonurse(){
  this.router.navigate(['./nurse']);
}
}
