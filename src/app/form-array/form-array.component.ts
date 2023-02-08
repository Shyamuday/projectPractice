import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  orderForm: FormGroup;
  items!: FormArray;

  constructor(private fb: FormBuilder) {
    this.orderForm = fb.group({});
  }

  ngOnInit() {
    this.orderForm = new FormGroup({
      items: new FormArray([]),
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: '',
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  get formData() {
    return (this.orderForm.get('items') as FormArray).controls;
  }

  // get items(): FormArray {
  //   return <FormArray>this.orderForm.get('items');
  // }

  // getControls(frmGrp: FormGroup, key: string) {
  //   return (<FormArray>frmGrp.controls[key]).controls;
  // }
}
