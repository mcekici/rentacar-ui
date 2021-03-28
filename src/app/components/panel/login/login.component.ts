import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router  
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      userName:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let model = Object.assign({},this.loginForm.value)
      this.authService.login(model).subscribe(response=>{
        localStorage.setItem("token",response.token);
        this.router.navigate(["panel"]) 
      })
    }
  }

}
