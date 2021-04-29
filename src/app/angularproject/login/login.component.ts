import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

import { IUser } from '../../app-user-interface'
import { UserService } from '../../app-user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //variables
  users: IUser[] = []
  invaiteUser: boolean = false
  @Output() invaite = new EventEmitter<boolean>()
  registerForm!: FormGroup
  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.loginInitialaizForm()
    this.registerInitialaizForm()
  }

  //login submit form
  loginInitialaizForm(): void {
    this.loginForm = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
  async onSubmitLoginForm() {
    await this.getUsersData()
    this.checkUserRegisterd(this.loginForm.value.email, this.loginForm.value.password)
  }
  //register submit form
  registerInitialaizForm(): void {
    this.registerForm = this.fb.group({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'repassword': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
  async onSubmitRegisterForm() {
    if (this.registerForm.value.password === this.registerForm.value.repassword) {
      const id = Math.floor(Math.random() * 10000)
      await this.sendUsersData({ id: id, email: this.registerForm.value.email, password: this.registerForm.value.password })
    }
    else {
      //show pass error
      console.log('passwords not match')
    }

  }
  //get users  from service
  async getUsersData() {
    // await this.userService.usefetch('http://localhost:3000/users', 'GET')
    //   .then(res => { this.users = res })
    this.userService.getData().subscribe(
      (data) => {
        this.users = data
   
      }

    )
  }
  //send user to service
  async sendUsersData(user: IUser) {

    // await this.userService.usefetch('http://localhost:3000/users',
    //  'POST', JSON.stringify(user))
    //   .then(res => { this.userService.currentUser=res})
    this.userService.postData( user).subscribe(
      (data) => {
        this.userService.currentUser = data
      }

    )

    this.emit()
  }
  //check user registerd
  checkUserRegisterd(email: string, passwprd: string): void {
    const finduser = this.users.find((item, index) => {
      return item.email === email && item.password === passwprd
    })

    if (finduser !== undefined) {
      this.userService.currentUser = { id: finduser.id, email: email, password: passwprd }
      this.emit()
    }
    else {
      //show error
      console.log('user not found')
    }
  }
  //check duplicate user
  //emit
  emit() {
    this.invaiteUser = true
    this.invaite.emit(this.invaiteUser)
  }

}
