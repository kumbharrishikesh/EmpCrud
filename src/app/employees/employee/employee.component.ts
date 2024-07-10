import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService,
    public departmentService: DepartmentService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>) { }



  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success('Cleared');
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key')?.value) {
        this.service.insertEmployee(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Created');
        // this.onClose();
      }
      else {
        this.service.updateEmployee(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.update('Updated');
        // this.onClose();
      }
    }
    this.onClose();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
