import { Component } from '@angular/core';
@Component({
selector: 'app-publisher1',
template: `
Enter ur text FROM PublisherComponent:<input type='text' [(ngModel)]= 'userText'>

<br/>
<app-customer1 [inputData]= 'userText'></app-customer1>
`
})

export class PublisherComponent {
userText: String= 'test checking...';
}
