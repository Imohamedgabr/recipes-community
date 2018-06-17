import { Component, OnInit } from '@angular/core';
import{NgForm} from "@angular/forms";
import {AuthService} from "../../auth.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
  	this.authService.signin(form.value.email, form.value.password )
  	.subscribe(
      TokenData => {
        localStorage.setItem('token' , TokenData.token  );
        console.log(TokenData)
      },
      error => console.log(error)
    );

  }
}




// onSignin(form: NgForm){
//   	this.authService.signin(form.value.email, form.value.password )
//   	.subscribe(
//   		Response => {
//   			response : Response => {
//   				const token = console.log(Response.json().token);
//   			}
//   		},
//   		error => console.log(error)
//   	);
//   }
