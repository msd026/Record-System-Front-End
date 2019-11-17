import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';
import { FormBuilder , FormGroup } from "@angular/forms";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  submitted = false;
  form: FormGroup;
public list = [];
  constructor( private _educationService : EducationService, public fb: FormBuilder) {
    
   }
  ngOnInit() {this._educationService.getEducation()
     .subscribe(data=>this.list = data);
     
     this.form = this.fb.group({
      list: ['']
    })
      // this.form.controls.list.patchValue(this.list[0]);
  }

  onSubmit() {
    this.submitted = true;
    // alert("success!");
    console.log(this.form.value);
  }

}
