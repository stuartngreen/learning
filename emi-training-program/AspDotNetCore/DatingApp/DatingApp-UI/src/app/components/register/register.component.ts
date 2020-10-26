import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output()
  public cancelRegister = new EventEmitter();

  model: any = {};

  public registerForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      knowAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(4), Validators.maxLength(8)]
    });
  }

  public register(): void {
    console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/user');
      this.cancel();
    }, error => {
      console.log(error);
      this.toastrService.error(error.error);
    });
  }

  public cancel(): void {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }

}
