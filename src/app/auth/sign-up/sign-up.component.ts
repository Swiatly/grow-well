import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from "@angular/forms";

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})

export class SignUpComponent {
    public signUpForm: FormGroup;

    constructor() {
        this.signUpForm = new FormGroup({
            'username': new FormControl(null, [Validators.required]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
            ]),
            'repeat-password': new FormControl(null, [Validators.required, this.matchPasswords.bind(this)])
        })
    }


  private matchPasswords(control: FormControl): ValidationErrors | null {
    if (!this.signUpForm) {
      return null; 
    }
    const password = this.signUpForm.get('password')?.value;
    const repeatPassword = control.value;

    if (password !== repeatPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

    public onSignUp(): void {
        if (this.signUpForm.invalid) {
            return;
        }
        console.log('Form Submitted:', this.signUpForm.value);
    }
}
  