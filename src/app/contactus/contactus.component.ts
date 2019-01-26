import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  confrm: FormGroup;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.confrm = new FormGroup({
      uname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      
      message: new FormControl('',Validators.required)
    });
  }
  onclick(){
    //console.log(this.confrm.value);
    this.toastr.success('Message Send Success!');
     
  }

}
