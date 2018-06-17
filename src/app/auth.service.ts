import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(private http:HttpClient) {

  }

	httpOptions = {
	  headers: new HttpHeaders({
	    'X-Requested-With':  'XMLHttpRequest'
	  })
	};

  signup(username: string , email: string , password: string ){
  	return this.http.post('http://localhost:8000/api/user',
  	{
  		name: username, email: email , password: password
  	}, 
  	this.httpOptions
  	)
  }


  signin(email: string , password: string ){
  	return this.http.post('http://localhost:8000/api/user/signin',
  	{
  		email: email , password: password
  	}, 
  	this.httpOptions
  	).pipe(map(
  		(res: Response) => { 
  			const token = JSON.stringify(res);
  			const base64Url = token.split('.')[1];
  			const base64 = base64Url.replace('-','+').replace('_','/');
  			return {token: token , decoded: JSON.parse(window.atob(base64))};
  			} 
  		)
  	)
  	
  }


}
