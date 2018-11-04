import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @Input() name:string = "";
  @Input() lastname:string = "";
  @Input() profetion:string = "";

  constructor(private user:UsersService) { }

  ngOnInit() {
  }

  saveUser() {
    // form.reset();
    console.log(this.name);
  }

}
