import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() name: string = "";
  @Input() password: string = "";
  data = null;
  constructor(private user: UsersService) {
    console.log("-----------------------------")
    console.log(user.getUsers().subscribe());
    console.log("-----------------------------")
    user.getUsers().subscribe(
      data => {
        this.data = data;
      }
    );

  }

  ngOnInit() {
  }

  saveUser(form?: NgForm) {
    alert(form);
  }
  addUser() {

  }

}
