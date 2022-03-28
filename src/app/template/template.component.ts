import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  user:any={};

  submit()
  {
    alert(JSON.stringify(this.user));
    console.log(this.user);
  }
}