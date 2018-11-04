import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from 'src/app/services/persons.service';
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
  constructor(private person: PersonService) {
    person.getPersons().subscribe(
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
