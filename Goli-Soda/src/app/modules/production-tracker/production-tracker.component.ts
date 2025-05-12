import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-production-tracker',
  templateUrl: './production-tracker.component.html',
  styleUrls: ['./production-tracker.component.scss']
})
export class ProductionTrackerComponent implements OnInit {

  formGroup: FormGroup;
  imagePreviews: string[] = [];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      records: this.fb.array([])
    });
  
    // Add initial data
    const initialData = [
      {
        date: '2025-05-10',
        openingCount: 100,
        closingCount: 180,
        bottlesProduction: 80,
        bottlesFalse: 5,
        cratesProduction: 8,
        zeroLabeled: 2,
        others: 1,
        stockForSale: 72,
        remarks: 'Smooth run',
        machineReadingPic: null
      },
      {
        date: '2025-05-11',
        openingCount: 180,
        closingCount: 250,
        bottlesProduction: 70,
        bottlesFalse: 3,
        cratesProduction: 7,
        zeroLabeled: 1,
        others: 0,
        stockForSale: 66,
        remarks: 'Minor issue with labeling',
        machineReadingPic: null
      }
    ];
  
    initialData.forEach(data => this.addRow(data));
  }
  

  get records(): FormArray {
    return this.formGroup.get('records') as FormArray;
  }

  addRow(data: any = null) {
    const row = this.fb.group({
      date: [data?.date || '', Validators.required],
      openingCount: [data?.openingCount || 0, Validators.required],
      closingCount: [data?.closingCount || 0, Validators.required],
      bottlesProduction: [data?.bottlesProduction || 0, Validators.required],
      bottlesFalse: [data?.bottlesFalse || 0, Validators.required],
      cratesProduction: [data?.cratesProduction || 0, Validators.required],
      zeroLabeled: [data?.zeroLabeled || 0, Validators.required],
      others: [data?.others || 0, Validators.required],
      stockForSale: [data?.stockForSale || 0, Validators.required],
      remarks: [data?.remarks || ''],
      machineReadingPic: [data?.machineReadingPic || null]
    });
  
    this.records.push(row);
    this.imagePreviews.push('');
  }

  removeRow(index: number) {
    this.records.removeAt(index);
    this.imagePreviews.splice(index, 1);
  }

  onImageChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.records.at(index).patchValue({ machineReadingPic: file });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      alert('Please fill all required fields.');
    }
  }

  // constructor() { }

  ngOnInit(): void {
  }

}
