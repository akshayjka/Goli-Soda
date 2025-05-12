import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  id: number;
  first: string;
  last: string;
  handle: string;
  details?: StockDetail[];
}

interface StockDetail {
  date: string;
  details: string;
  stockIn: number;
  stockOut: number;
  balance: number;
}

interface PersonFormGroup extends FormGroup {
  showDetails?: boolean;
}



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  peopleForm: FormGroup;
  detailsVisibility: boolean[] = [];

  constructor(private fb: FormBuilder) {
    this.peopleForm = this.fb.group({
      people: this.fb.array([])
    });
  }

  get people(): FormArray {
    return this.peopleForm.get('people') as FormArray;
  }

  addPerson() {
    this.people.push(this.newPerson());
    this.detailsVisibility.push(false); // Initialize visibility to false
  }

  removePerson(index: number) {
    this.people.removeAt(index);
    this.detailsVisibility.splice(index, 1); // Remove corresponding visibility state
  }

  toggleDetails(index: number) {
    this.detailsVisibility[index] = !this.detailsVisibility[index];
  }

  newPerson(): FormGroup {
    return this.fb.group({
      accountNo: ['', Validators.required],
      accountName: ['', Validators.required],
      contact: ['', Validators.required],
      village: ['', Validators.required],
      details: this.fb.array([])
    });
  }

  getDetails(personIndex: number): FormArray {
    return this.people.at(personIndex).get('details') as FormArray;
  }

  newDetail(): FormGroup {
    return this.fb.group({
      date: ['', Validators.required],
      details: ['', Validators.required],
      stockIn: [0, Validators.required],
      stockOut: [0, Validators.required],
      balance: [0, Validators.required]
    });
  }

  addDetail(personIndex: number) {
    this.getDetails(personIndex).push(this.newDetail());
  }

  removeDetail(personIndex: number, detailIndex: number) {
    this.getDetails(personIndex).removeAt(detailIndex);
  }

  onSubmit() {
    if (this.peopleForm.valid) {
      console.log(this.peopleForm.value);
    } else {
      alert('Please fill all required fields.');
    }
  }

  initialCustomers = [
    {
      accountNo: 'CUST001',
      accountName: 'John Doe',
      contact: '9876543210',
      village: 'Chennai',
      details: [
        {
          date: '2025-05-01',
          details: 'Initial stock',
          stockIn: 10,
          stockOut: 0,
          balance: 10
        },
        {
          date: '2025-05-05',
          details: 'Sold crates',
          stockIn: 0,
          stockOut: 3,
          balance: 7
        }
      ]
    },
    {
      accountNo: 'CUST002',
      accountName: 'Jane Smith',
      contact: '9123456780',
      village: 'Madurai',
      details: [
        {
          date: '2025-05-02',
          details: 'Initial stock',
          stockIn: 15,
          stockOut: 0,
          balance: 15
        }
      ]
    }
  ];
  

  ngOnInit(): void {
    this.peopleForm = this.fb.group({
      people: this.fb.array([])
    });
  
    this.initialCustomers.forEach(customer => {
      const customerGroup = this.fb.group({
        accountNo: [customer.accountNo, Validators.required],
        accountName: [customer.accountName, Validators.required],
        contact: [customer.contact, Validators.required],
        village: [customer.village, Validators.required],
        details: this.fb.array([])
      });
  
      customer.details.forEach(detail => {
        const detailGroup = this.fb.group({
          date: [detail.date, Validators.required],
          details: [detail.details, Validators.required],
          stockIn: [detail.stockIn, Validators.required],
          stockOut: [detail.stockOut, Validators.required],
          balance: [detail.balance, Validators.required]
        });
  
        (customerGroup.get('details') as FormArray).push(detailGroup);
      });
  
      this.people.push(customerGroup);
    });
  }


}
