import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { emailOrPhoneReq } from './customerror.directive';

@Component({
  selector: 'app-builder-form-array',
  templateUrl: './builder-form-array.component.html',
  styleUrls: ['./builder-form-array.component.scss'],
})
export class BuilderFormArrayComponent {
  constructor(private fb: FormBuilder) {}
  // Replace this method using formbuilder service
  // jobForm= new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })
  jobForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    contacts: this.fb.group({
      contactType: ['-1', [emailOrPhoneReq]],
      email: [''],
      phone: [''],
    }),
    skills: this.fb.array(['']),
  });

  preview: string = '';
  ngOnInit(): void {}

  get firstname() {
    return this.jobForm.get('firstName');
  }

  get contactType() {
    return this.jobForm.get('contacts.contacType');
  }

  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
  get skillForms() {
    return this.jobForm.get('skills') as FormArray;
  }

  addSkillFormGroup() {
    this.skillForms.push(
      this.fb.group({
        programminglanguage: ['', [Validators.required]],
        experience: [0],
      })
    );
  }
  getProgrammingLang(index: number) {
    return this.skillForms.at(index).get('programminglanguage');
  }

  removeskillformGroup(index: number) {
    this.skillForms.removeAt(index);
  }

  // sampleSetValue(){
  //   this.jobForm.setValue({
  //     firstName: 'Naveen',
  //     lastName: null,
  //     contacts:{
  //       contactType:"email",
  //       phone:"8546254574",
  //       email: 'ac@gmail.com'
  //     },
  //     skills: []
  //   })
  // }

  patchValue() {
    this.jobForm.patchValue({
      firstName: 'Utasav',
      lastName: null,
      contacts: {
        contactType: 'email',
        phone: '8546254574',
        email: 'ac@gmail.com',
      },
      skills: [],
    });
  }
}
