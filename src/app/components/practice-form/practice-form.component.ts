import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './practice-form.component.html',
  styleUrl: './practice-form.component.css'
})
export class PracticeFormComponent {
 registrationForm:FormGroup 
 submitted = false;

 constructor(private formbuilder:FormBuilder){
 this.registrationForm = this.formbuilder.group({
  firstname:['',[Validators.required]]
 })
 }

 submit(){
  this.submitted = true;
  if(this.registrationForm.valid){
    console.log(this.registrationForm.value)
  }
  this.registrationForm.reset()
 }
}
