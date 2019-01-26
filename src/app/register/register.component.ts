import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regfrm:FormGroup;
  

  constructor(private router: Router,private toastr: ToastrService) {
   
 
   }

  ngOnInit() {
    this.regfrm=new FormGroup({
      uname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      psw: new FormControl('',[Validators.required,Validators.minLength(6)]),
      chk: new FormControl('',Validators.required)
    });
  }
  onclick(){
    //console.log(this.regfrm.value);
    this.toastr.success('Sign-Up Success!');
    this.router.navigate(['/login']);

    const regLocal={
      email:this.regfrm.get('email').value,
      psw:this.regfrm.get('psw').value
    };
    localStorage.setItem('reglocal',JSON.stringify(regLocal));

  }

}
