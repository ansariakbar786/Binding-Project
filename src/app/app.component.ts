import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader: String = 'Employee Details';
  imagePath: String= 'http://www.pragimtech.com/Images/Logo.JPG' ;
   // calculation
  val1= 10;
  val2= 15;


   // data binding
  isDisabled = false;
  bvalue = true;

  firstName: String= 'Akbar';
  lastName: String= 'Ansari';

  // style class
  applyToClass: String= 'boldClass italicClass';
  // add or remve colr apply boolen value
  applyBoldClass= true;
  applyItalicClas= true;
  // apply add or remove multi style
  addClass() {
    const classes = {
      boldClass: this.applyBoldClass,
      italicClass: this.applyItalicClas
    };
    return classes;
  }

  // defining a method
  getFullName(): String {
    return this.firstName + ' ' + this.lastName;
  }

  onClick(): void {
    console.log('Button clicked');
  }
}

