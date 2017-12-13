import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-customer1',
  template: ` You Entered CustomerComponent : {{inputData}}

`

})

export class CustomerComponent {
@Input()
inputData: String;
}
