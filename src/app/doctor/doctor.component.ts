import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

 logindata :any ;

loginform = new FormGroup({ 
      'docid' : new FormControl(null,Validators.required),
           'docpw' : new FormControl(null,[Validators.required ]),
    });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getid: any;
  pwid: any;
 users=[
    {
      docid: "12345",
      docpw: "harish",
    }
  ]
  onSubmit(){
     sessionStorage .setItem('User', JSON.stringify(this.loginform.value));
     this.logindata = sessionStorage.getItem('User');
     console.log(this.logindata.docid)

this.getid = this.users[0].docid
this.pwid = this.users[0].docpw
console.log(this.pwid)

     if(this.logindata.docid === this.getid && this.logindata.docpw === this.pwid){
   alert("Wrong Credentials")
     }
     else{
      this.gotodocdashboard();
      
     }
this.loginform.reset(); 

  }
  get vname(){
return this.loginform.get("docid")
 }
  get vpw(){
return this.loginform.get("docpw")
 }
 gotohome(){
  this.router.navigate(['./home'])
 }
 gotodocdashboard(){
  this.router.navigate(['./docdashboard'])
 }
}
