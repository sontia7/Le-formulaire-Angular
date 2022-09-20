import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user: User = new User(); //nouvelle instance de cette classe
  constructor() { }

  ngOnInit(): void {
  }
    public saveData(registerForm: NgForm) {
      console.log(registerForm.form);
      console.log('valeurs : ', JSON.stringify(registerForm.value));
      console.log('j appel ma methode');
    }

}
