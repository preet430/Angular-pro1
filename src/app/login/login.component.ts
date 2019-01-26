import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logfrm: FormGroup;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.logfrm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      psw: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  
  }
  onclick(){
    //console.log(this.logfrm.value);

    const logLocal={
      email:this.logfrm.get('email').value,
      psw:this.logfrm.get('psw').value
    };

    var local=JSON.parse(localStorage.getItem('reglocal'));

    if(logLocal.email==local.email && logLocal.psw==local.psw){
      //alert("you are succesfully login");
      this.toastr.success('Login Success!');
    }
    else{
      //alert("data can't be matched");
      this.toastr.error('Data Cant Be Matched' );
    }

  }

}
