import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Routes, Router } from '@angular/router';
import { UserManagementComponent } from '../user-management/user-management.component'
import { StudentListComponent } from '../student-list/student-list.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth.service';

export const childRoutes: Routes = [
  { path: '', redirectTo: 'student-list', pathMatch: 'full' },
  { path: 'student-list', component: StudentListComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'login', component: LoginFormComponent }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  menuIndex: number = 2;

  constructor(fb: FormBuilder, private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  menuClicked(index) {
    this.menuIndex = index;

    if (index == 1) {
      this.router.navigate(['/home/user-management']);
    }
    else if (index == 2) {
      this.router.navigate(['/home/student-list']);
    }
    else if (index == 3) {
      //this.auth.logout();
      //alert('你以登出！');
      this.router.navigate(['/login']);
    }
  }


  insertValue() {
    //alert("插入成功");
    // var tr = ("<tr></tr>");
    // var name = "<td>" + ("name").valueOf + "</td>"
    // var sex = "<td>" + ("sex").valueOf + "</td>"
    // var web = "<td>" + ("web").valueOf + "</td>"
    // var embeded = "<td>" + ("embeded").valueOf + "</td>"

    // this.insertStu.push(tr);
    // this.insertStu.push(name);
    // this.insertStu.push(sex);
    // this.insertStu.push(web);
    // this.insertStu.push(embeded);
  }
}

