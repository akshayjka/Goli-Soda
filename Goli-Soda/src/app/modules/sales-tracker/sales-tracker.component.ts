import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sales-tracker',
  templateUrl: './sales-tracker.component.html',
  styleUrls: ['./sales-tracker.component.scss']
})
export class SalesTrackerComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      records: this.fb.array([])
    });
  
    // Add 3 rows of initial data
    const initialData = [
      {
        date: '2025-05-10',
        bottlesOpeningStock: 1000,
        bottlesProduction: 500,
        bottlesTotalStock: 1500,
        leakageBottles: 10,
        bottlesDamage: 5,
        details: 'Morning shift',
        fullCratesStock: 50,
        bottlesSoldCash: 600,
        bottlesCashTotal: 12000,
        bottlesClosingStock: 880,
        bankDepositDate: '2025-05-10',
        bankAmount: 10000,
        remarks: 'Smooth operation',
        bankDetails: 'SBI A/C 123456'
      },
      {
        date: '2025-05-11',
        bottlesOpeningStock: 880,
        bottlesProduction: 600,
        bottlesTotalStock: 1480,
        leakageBottles: 8,
        bottlesDamage: 3,
        details: 'Evening shift',
        fullCratesStock: 48,
        bottlesSoldCash: 700,
        bottlesCashTotal: 14000,
        bottlesClosingStock: 769,
        bankDepositDate: '2025-05-11',
        bankAmount: 12000,
        remarks: 'High sales',
        bankDetails: 'HDFC A/C 789012'
      },
      {
        date: '2025-05-12',
        bottlesOpeningStock: 769,
        bottlesProduction: 700,
        bottlesTotalStock: 1469,
        leakageBottles: 6,
        bottlesDamage: 4,
        details: 'Afternoon shift',
        fullCratesStock: 55,
        bottlesSoldCash: 800,
        bottlesCashTotal: 16000,
        bottlesClosingStock: 659,
        bankDepositDate: '2025-05-12',
        bankAmount: 15000,
        remarks: 'Excellent output',
        bankDetails: 'ICICI A/C 345678'
      }
    ];
  
    initialData.forEach(data => this.addRow(data));
  }
  

get records(): FormArray {
  return this.formGroup.get('records') as FormArray;
}

addRow(data?: any) {
  const row = this.fb.group({
    date: [data?.date || ''],
    bottlesOpeningStock: [data?.bottlesOpeningStock || 0],
    bottlesProduction: [data?.bottlesProduction || 0],
    bottlesTotalStock: [data?.bottlesTotalStock || 0],
    leakageBottles: [data?.leakageBottles || 0],
    bottlesDamage: [data?.bottlesDamage || 0],
    details: [data?.details || ''],
    fullCratesStock: [data?.fullCratesStock || 0],
    bottlesSoldCash: [data?.bottlesSoldCash || 0],
    bottlesCashTotal: [data?.bottlesCashTotal || 0],
    bottlesClosingStock: [data?.bottlesClosingStock || 0],
    bankDepositDate: [data?.bankDepositDate || ''],
    bankAmount: [data?.bankAmount || 0],
    remarks: [data?.remarks || ''],
    bankDetails: [data?.bankDetails || '']
  });

  this.records.push(row);
}


removeRow(index: number) {
  this.records.removeAt(index);
}

onSubmit() {
  if (this.formGroup.valid) {
    console.log(this.formGroup.value);
  } else {
    alert('Please fill in all required fields.');
  }
}


  // constructor() { }

  ngOnInit(): void {
  }

}
