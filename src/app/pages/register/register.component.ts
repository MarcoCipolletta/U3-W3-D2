import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  formRegister!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formRegister = this.fb.group({
      nome: this.fb.control('', [Validators.required]),
      cognome: this.fb.control('', [Validators.required]),
      passwordControl: this.fb.group({
        password: this.fb.control('', [Validators.required]),
        passwordConfirm: this.fb.control('', [Validators.required]),
      }),
      genere: this.fb.control('', [Validators.required]),
      imgProfile: this.fb.control('', [Validators.required]),
      bio: this.fb.control('', [Validators.required, Validators.minLength(30)]),
      username: this.fb.control('', [Validators.required]),
    });
  }

  send() {
    console.log(this.formRegister.value);
  }
}
