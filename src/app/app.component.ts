import { DatePipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-app2';

  addModel = new Employee();
  updateModel = new Employee();
  employees : Employee[] = [];

  addForm : FormGroup = new FormGroup({});
  updateForm : FormGroup = new FormGroup({});

  updateIndex : number = 0;


  constructor(private _date:DatePipe){
    this.addModel.startingDate = this._date.transform(new Date(),'yyyy-MM-dd');
  }

  save(form:NgForm){
    if(form.valid){
      console.log(form.value);
      this.employees.push(this.addModel);
      this.addModel = new Employee();
      this.addModel.startingDate = this._date.transform(new Date(),'yyyy-MM-dd');
    }
  }

 

  get(model:Employee,index:number){
    model = this.employees[index];
    this.updateModel = { ...model };
  }


  update(form:NgForm){
   if(form.valid)
    {
      console.log(form.value);
      
      this.employees[this.updateIndex] = { ...this.updateModel };
      
     
    }
  }

 
}

class Employee {
  name : string = "";
  profession : string = "";
  startingDate : string | null = "";
}

