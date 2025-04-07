import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { retry } from 'rxjs';

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
  firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  detailsArray:this.formbuilder.array([])
 })
 }
 detailsArray():FormArray{
  return this.registrationForm.get('detailsArray') as FormArray
 }

 addDetails(){
 const details = this.formbuilder.group({
  email:['',[Validators.required,Validators.email]],
  phnno:['',[Validators.required,Validators.maxLength(10)]],
  address:['',[Validators.required]],
 })
 this.detailsArray().push(details)
 }
 delete(index){
  this.detailsArray().removeAt(index)
 }
 submit(){
  this.submitted = true;
  if(this.registrationForm.valid){
    console.log(this.registrationForm.value)
  }
  this.registrationForm.reset()
 }
}
