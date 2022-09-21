import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user: User = new User(); //nouvelle instance de cette classe

    public registerForm: FormGroup;

  constructor() { }

          ngOnInit(): void {
                this.registerForm = new FormGroup({
                      firstName : new FormControl(),
                      lastName : new FormControl(),
                      email : new FormControl(),
                      sendCatalog : new FormControl(true)
                });
          }
    public saveData() {
      console.log(this.registerForm);
      console.log('valeurs : ', JSON.stringify(this.registerForm.value));
      console.log('j appel ma methode');
    }

}
