import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit 
{

  constructor(private fb:FormBuilder) { }
  form=this.fb.group({
    name:['',[Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z/]+$/)]],
    email:['',[Validators.required, Validators.pattern(/^([a-zA-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
    contact:['',[Validators.required,Validators.minLength(10),Validators.pattern(/^[0-9]/)]],
    city:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
    pincode:['',[Validators.required,Validators.minLength(6),Validators.pattern(/^[0-9]/)]]
  })

  ngOnInit(): void { }

  get f():{[key:string]:AbstractControl}{
    return this.form.controls;
  }

  submit(){
    alert(JSON.stringify(this.form.value));
  }

}
