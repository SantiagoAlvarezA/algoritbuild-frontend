import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/services/persons.service';
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

  constructor(private person:PersonService) { }

  ngOnInit() {
  }

  saveUser() {
    // form.reset();
    console.log(this.name);
  }

}
