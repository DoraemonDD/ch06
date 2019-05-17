import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


//自定义一个验证器
function phoneValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^131/)) {
    return { invalidPhoneNumber: true };
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  user: AbstractControl;
  password: AbstractControl;
  captcha: AbstractControl;
  phonenumber: AbstractControl;
  public num: number;
  public value: string;
  index: number;
  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.index = 0;
    //let control = new FormGroup('cInput', Validators.required);
    this.myForm = fb.group({
      'user': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'captcha': ['', Validators.compose([Validators.min(1000) || Validators.max(9999)])],
      'phonenumber': ['', Validators.compose([Validators.required, phoneValidator])]
    });
    this.user = this.myForm.controls['user'];
    this.password = this.myForm.controls['password'];
    this.captcha = this.myForm.controls['captcha'];
    this.phonenumber = this.myForm.controls['phonenumber'];
  }

  ngOnInit() {
  }


  onSubmit(value: any): void {
    console.log("你要提交的内容", value);
    //闭包：var myRouter = this.router;
    this.auth.login(value, function () {
      this.router.navigate(['/home']);
      //闭包：myRouter.navigate(['/home']);
    }.bind(this));

    this.auth.userName = value.user;//将变量user的值赋给auth服务

    this.index = 1;
    // this.httpclient.post("http://127.0.0.1:8082/login", JSON.stringify(value)).subscribe(
    //   (resp: any) => {
    //     console.log(resp);
    //     if (resp.success) {
    //       alert("登陆成功");
    //     }
    //     else {
    //       alert("登录失败");
    //     }
    //   }
    // );
  }

  isLogin(index) {
    index = this.index;
    if (index == 1) {
      return "已登录";
    }
    else {
      return "未登录";
    }
  }

}
