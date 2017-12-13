
import { Component } from '@angular/core';

@Component({
  selector: `app-employee`,
  templateUrl: `./employee.component.html`,
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  columnSpan: Number= 2;
  firstName: String= 'Akbar';
  lastName: String= 'Ansari';
  gender: String= 'Male';
  age: Number= 25;
  showDetails= false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

}

